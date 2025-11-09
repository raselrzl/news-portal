import { prisma } from "@/app/utils/db";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
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

// TypeScript type based on Prisma schema
type InstagramType = {
  id: string;
  igLink: string;
  igStatus: "ACTIVE" | "DRAFT" | "EXPIRED";
  createdAt: Date;
  updatedAt: Date;
};

// Fetch Instagram posts with pagination
async function getAllInstagramPosts(
  page = 1,
  pageSize = 10
): Promise<{ posts: InstagramType[]; totalCount: number; totalPages: number }> {
  const skip = (page - 1) * pageSize;

  const [posts, totalCount] = await Promise.all([
    prisma.instagramPost.findMany({
      take: pageSize,
      skip,
      orderBy: { createdAt: "desc" },
      select: { id: true, igLink: true, igStatus: true, createdAt: true, updatedAt: true },
    }),
    prisma.instagramPost.count(),
  ]);

  return { posts, totalCount, totalPages: Math.ceil(totalCount / pageSize) };
}

// ✅ Typing searchParams as Promise
type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function AllInstagramPosts({ searchParams }: Props) {
  // ✅ Await searchParams before accessing properties
  const params = await searchParams;
  const currentPage = Number(params.page ?? 1);

  // Role-based access
  await requireRoleAccess(["EDITOR", "SUPERADMIN"]);
  const userHasAccess = await requireSompandokOrSuperAdmin();
  if (!userHasAccess) return redirect("/restricted");

  const { posts, totalCount, totalPages } = await getAllInstagramPosts(currentPage);

  return (
    <>
      <h1 className="text-xl font-bold bg-accent-foreground/5 p-2 mb-2 flex justify-between items-center">
        <span>Manage Instagram Posts</span>
        <div className="text-sm bg-primary text-white px-3 py-1 rounded-md">
          Total: {totalCount}
        </div>
      </h1>

      {posts.length ? (
        <>
          <Card className="rounded-md">
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Instagram Link</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Updated</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>
                        <a
                          href={post.igLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View Post
                        </a>
                      </TableCell>
                      <TableCell>
                        {post.igStatus === "ACTIVE" ? (
                          <div className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="w-4 h-4" /> Active
                          </div>
                        ) : post.igStatus === "DRAFT" ? (
                          <span className="text-yellow-600 font-medium">Draft</span>
                        ) : (
                          <div className="flex items-center gap-1 text-red-600">
                            <XCircle className="w-4 h-4" /> Expired
                          </div>
                        )}
                      </TableCell>
                      <TableCell>{new Date(post.createdAt).toLocaleString()}</TableCell>
                      <TableCell>{new Date(post.updatedAt).toLocaleString()}</TableCell>
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
                                href={`/post-an-article/post-an-instagram/allinstagrampost/${post.id}/updatestatus`}
                              >
                                <PenBoxIcon className="w-4 h-4 mr-2" />
                                Update Status
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/post-an-article/post-an-instagram/allinstagrampost/${post.id}/delete`}
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

          <PaginationComponent totalPages={totalPages} currentPage={currentPage} />
        </>
      ) : (
        <EmptyState
          title="No Instagram Posts Found"
          description="There are currently no Instagram posts available."
          buttonText="Go to Dashboard"
          href="/"
        />
      )}
    </>
  );
}
