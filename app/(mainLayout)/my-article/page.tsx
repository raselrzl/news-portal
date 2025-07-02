import { prisma } from "@/app/utils/db";
import { requireNewsReporter, requireUser } from "@/app/utils/requireUser";
import { trackRoute } from "@/app/utils/routeTracker";
import { EmptyState } from "@/components/general/EmptyState";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, MoreHorizontal, PenBoxIcon, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getNewses(userId: string) {
  const data = await prisma.newsArticle.findMany({
    where: {
      newsReporter: {
        userId: userId,
      },
    },
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
      newsReporter: true,
      newsArticleStatus: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function MyArticle() {
  const session = await requireUser();
  const data = await getNewses(session.id as string);
  const approvednewsreporter = await requireNewsReporter();
  await trackRoute("MyArticle");

  return (
    <>
      {data.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>All News Articles</CardTitle>
            <CardDescription>
              View all news articles, regardless of status or category.
            </CardDescription>
          </CardHeader>
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
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell>
                      {article.newsPicture ? (
                        <Image
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
                    <TableCell>{article.newsReporter?.reporterName ?? "Unknown"}</TableCell>
                    <TableCell>
                      {new Date(article.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
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
                            <Link href={`/post-an-article/alaarticles/${article.id}/editarticle`}>
                              <PenBoxIcon className="w-4 h-4 mr-2" />
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href={`/post-an-article/alaarticles/${article.id}/deletearticle`}>
                              <XCircle className="w-4 h-4 mr-2 text-red-600" />
                              Delete
                            </Link>
                          </DropdownMenuItem>
                          {article.newsArticleStatus === "ACTIVE" ? (
                            <DropdownMenuItem asChild>
                              <Link href={`/post-an-article/alaarticles/${article.id}/updatestatustodraft`}>
                                <CheckCircle className="w-4 h-4 mr-2 text-yellow-500" />
                                Move to Draft
                              </Link>
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem asChild>
                              <Link href={`/post-an-article/alaarticles/${article.id}/updatestatustoactive`}>
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
      ) : (
        <EmptyState
          title="No Articles Available"
          description="There are no articles to show. Please add some."
          buttonText="Go to Homepage"
          href="/"
        />
      )}
    </>
  );
}
