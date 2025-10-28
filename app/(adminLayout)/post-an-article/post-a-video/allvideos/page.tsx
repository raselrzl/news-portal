import { prisma } from "@/app/utils/db";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckCircle, MoreHorizontal, PenBoxIcon, XCircle } from "lucide-react";
import { EmptyState } from "@/components/general/EmptyState";
import { requireSompandokOrSuperAdmin } from "@/app/utils/requireUser";
import { redirect } from "next/navigation";
import { PaginationComponent } from "@/components/general/PaginationComponent";
import { requireRoleAccess } from "../../roleBaseAccess";

async function getAllVideos(page: number = 1, pageSize: number = 10) {
  const skip = (page - 1) * pageSize;

  const [videos, totalCount] = await Promise.all([
    prisma.videopost.findMany({
      take: pageSize,
      skip,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        videoAbout: true,
        videoHeadings: true,
        videoLink: true,
        isFeatured: true,
        startDate: true,
        vedioStatus: true,
        createdAt: true,
        updatedAt: true,
      },
    }),
    prisma.videopost.count(),
  ]);

  return { videos, totalCount, totalPages: Math.ceil(totalCount / pageSize) };
}

type SearchParamsProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function AllVideos({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

   const rewuireUserToAccessPage = await requireRoleAccess([
          "EDITOR",
          "SUPERADMIN"
        ]);

  const SompandokOrSuperAdmin = await requireSompandokOrSuperAdmin();
  if (!SompandokOrSuperAdmin) return redirect("/restricted");

  const { videos, totalCount, totalPages } = await getAllVideos(currentPage);

  return (
    <>
      <h1 className="text-xl font-bold bg-accent-foreground/5 p-2 mb-2 flex justify-between items-center">
        <span>Manage All Videos</span>
       <div className="text-sm bg-primary text-white px-3 py-1 rounded-md">
          Total: {totalCount}
        </div>
      </h1>

      {videos.length > 0 ? (
        <>
          <Card className="rounded-xs">
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Heading</TableHead>
                    <TableHead>About</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Video Link</TableHead>
                    <TableHead>Featured</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {videos.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.videoHeadings}</TableCell>
                      <TableCell>{item.videoAbout}</TableCell>
                      <TableCell>
                        {item.vedioStatus === "ACTIVE" ? (
                          <CheckCircle className="text-green-600 w-4 h-4" />
                        ) : (
                          <XCircle className="text-red-600 w-4 h-4" />
                        )}
                      </TableCell>
                      <TableCell>
                        <a
                          href={item.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 underline"
                        >
                          View Video
                        </a>
                      </TableCell>
                      <TableCell>{item.isFeatured ? "Yes" : "No"}</TableCell>
                      <TableCell>
                        {new Date(item.startDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        {new Date(item.createdAt).toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/post-an-article/post-a-video/allvideos/${item.id}/updatestatus`}
                              >
                                <PenBoxIcon className="w-4 h-4 mr-2" />
                                Update
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/post-an-article/post-a-video/allvideos/${item.id}/delete`}
                              >
                                <XCircle className="w-4 h-4 mr-2 text-red-500" />
                                Delete
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* ✅ Pagination below table */}
          <PaginationComponent totalPages={totalPages} currentPage={currentPage} />
        </>
      ) : (
        <EmptyState
          title="No Videos Found"
          description="There are currently no videos available."
          buttonText="Go to Dashboard"
          href="/"
        />
      )}
    </>
  );
}
