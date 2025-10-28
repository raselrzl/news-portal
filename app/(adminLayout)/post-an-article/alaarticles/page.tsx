import { prisma } from "@/app/utils/db";
import { PaginationComponent } from "@/components/general/PaginationComponent";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
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
import { requireRoleAccess } from "../roleBaseAccess";

async function getAllnewsArticles(page: number = 1, pageSize: number = 10) {
  const skip = (page - 1) * pageSize;

  const [data, totalCount] = await Promise.all([
    prisma.newsArticle.findMany({
      take: pageSize,
      skip: skip,
      select: {
        id: true,
        createdAt: true,
        isFeatured: true,
        newsCategory: true,
        newsDetails: true,
        newsHeading: true,
        newsPicture: true,
        quotes: {
          select: {
            speakerInfo: true,
            text: true,
          },
        },
        newsResource: true,
        newsPictureHeading: true,
        newsPictureCredit: true,
        newsLocation: true,
        newsReporter: {
          select: {
            reporterName: true,
          },
        },
        newsArticleStatus: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.newsArticle.count(),
  ]);

  return {
    articles: data,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
  };
}

type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function AllNewsArticleList({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const rewuireUserToAccessPage = await requireRoleAccess([
    "EDITOR",
    "SUPERADMIN",
  ]);

  const { articles, totalPages, totalCount } = await getAllnewsArticles(currentPage);

  const userRole = rewuireUserToAccessPage?.userType;

  return (
    <>
      <div className="flex items-center justify-between mb-8 bg-accent-foreground/5 p-2">
        <h1 className="text-xl font-bold">Manage All Articles</h1>
        <div className="text-sm bg-primary text-white px-3 py-1 rounded-md">
          Total: {totalCount}
        </div>
      </div>

      {articles.length > 0 ? (
        <div className="flex flex-col gap-6">
          <Card className="rounded-xs">
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Heading</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Reporter</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {articles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell>
                        {article.newsPicture ? (
                          <img
                            src={article.newsPicture}
                            alt="News Image"
                            width={80}
                            height={50}
                            className="rounded object-fill h-[50px] w-[80px]"
                          />
                        ) : (
                          <div className="bg-gray-200 size-10 rounded flex items-center justify-center text-xs">
                            No Image
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">
                        {article.newsHeading?.split(" ").slice(0, 3).join(" ") ?? ""}..
                      </TableCell>
                      <TableCell>{article.newsCategory}</TableCell>
                      <TableCell>{article.newsArticleStatus}</TableCell>
                      <TableCell>
                        {article.newsReporter?.reporterName ?? "Unknown"}
                      </TableCell>
                      <TableCell>
                        {new Date(article.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </TableCell>
                      <TableCell>{article.newsLocation ?? "N/A"}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>

                            {/* Always visible: Edit */}
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/post-an-article/alaarticles/${article.id}/editarticle`}
                              >
                                <PenBoxIcon className="w-4 h-4 mr-2" />
                                Edit
                              </Link>
                            </DropdownMenuItem>

                            {/* Only SUPERADMIN can see Delete */}
                            {userRole === "SUPERADMIN" && (
                              <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/post-an-article/alaarticles/${article.id}/deletearticle`}
                                  >
                                    <XCircle className="w-4 h-4 mr-2 text-red-600" />
                                    Delete
                                  </Link>
                                </DropdownMenuItem>
                              </>
                            )}

                            {/* Status Change (Visible to both SOMPANDOK & SUPERADMIN) */}
                            {article.newsArticleStatus === "ACTIVE" ? (
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/post-an-article/alaarticles/${article.id}/updatestatustodraft`}
                                >
                                  <CheckCircle className="w-4 h-4 mr-2 text-yellow-500" />
                                  Draft
                                </Link>
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/post-an-article/alaarticles/${article.id}/updatestatustoactive`}
                                >
                                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                  Publish
                                </Link>
                              </DropdownMenuItem>
                            )}
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
        </div>
      ) : (
        <EmptyState
          title="Oops! Nothing to show yet."
          description="Nothing has been added yet. Stay tuned!"
          buttonText="Click here to go to the homepage"
          href="/"
        />
      )}
    </>
  );
}
