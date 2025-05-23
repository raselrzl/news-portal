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
import { requireSuperAdmin } from "@/app/utils/requireUser";

async function getAllOpinions() {
  return await prisma.opinion.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      opinion: true,
      createdAt: true,
    },
  });
}

export default async function AllOpinionsTable() {
  const opinions = await getAllOpinions();
  const superadmin=await requireSuperAdmin()

  return (
    <>
      {opinions.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>All Complaints</CardTitle>
            <CardDescription>Recent user-submitted complaints.</CardDescription>
          </CardHeader>
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
                      <p className="line-clamp-1">
                        {opinion.opinion.split(" ").slice(0, 6).join(" ")}...
                      </p>
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
                              href={`/alluseropinion/opiniontable/${opinion.id}/delete`}
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
      ) : (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold">No Complaints Found</h2>
          <p className="text-muted-foreground">
            There are no opinions in the system.
          </p>
        </div>
      )}
    </>
  );
}
