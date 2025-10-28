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
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { XCircle, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { requireRoleAccess } from "../../roleBaseAccess";
import { EmptyState } from "@/components/general/EmptyState";

async function getAllOpinions(page: number = 1, pageSize: number = 10) {
  const skip = (page - 1) * pageSize;

  const [opinions, totalCount] = await Promise.all([
    prisma.opinion.findMany({
      take: pageSize,
      skip,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        opinion: true,
        createdAt: true,
      },
    }),
    prisma.opinion.count(),
  ]);

  return {
    opinions,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
  };
}

type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function AllOpinionsTable({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const requireUserToAccessPage = await requireRoleAccess([
    "EDITOR",
    "SUPERADMIN",
  ]);

  const { opinions, totalCount, totalPages } = await getAllOpinions(currentPage);

  return (
    <>
      <h1 className="text-xl font-bold bg-accent-foreground/5 p-2 mb-8">
        Manage All Complaints
      </h1>

      {opinions.length > 0 ? (
        <div className="flex flex-col gap-6">
          <Card className="rounded-xs">
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Opinion</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {opinions.map((opinion) => (
                    <TableRow key={opinion.id}>
                      <TableCell>{opinion.name}</TableCell>
                      <TableCell>{opinion.email || "-"}</TableCell>
                      <TableCell>{opinion.phone || "-"}</TableCell>
                      <TableCell className="max-w-sm">
                        <p className="line-clamp-1">{opinion.opinion}</p>
                      </TableCell>
                      <TableCell>
                        {format(new Date(opinion.createdAt), "yyyy-MM-dd HH:mm")}
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
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/post-an-article/alluseropinion/deleteopinion/${opinion.id}/delete`}
                                className="text-red-600"
                              >
                                <XCircle className="w-4 h-4 mr-2" />
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
        </div>
      ) : (
        <EmptyState
          title="Oops! Nothing to show yet."
          description="No opinions submitted yet."
          buttonText="Homepage"
          href="/"
        />
      )}
    </>
  );
}
