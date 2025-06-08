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
  CardHeader,
  CardTitle,
  CardDescription,
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

async function getAllVideos() {
  const ads = await prisma.videopost.findMany({
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
    orderBy: {
      createdAt: "desc",
    },
  });

  return ads;
}

export default async function AllVideos() {
  const vedio = await getAllVideos();
  const SompandokOrSuperAdmin = await requireSompandokOrSuperAdmin();
  if (!SompandokOrSuperAdmin) {
    return redirect("/restricted");
  }

  return (
    <>
      {vedio.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>All Vedios</CardTitle>
            <CardDescription>
              View all active and inactive Vedios.
            </CardDescription>
          </CardHeader>
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
                {vedio.map((item) => (
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
                        className="text-blue-600 underline"
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
      ) : (
        <EmptyState
          title="No Advertisements Found"
          description="There are currently no advertisements available."
          buttonText="Go to Dashboard"
          href="/"
        />
      )}
    </>
  );
}
