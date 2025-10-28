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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckCircle, MoreHorizontal, XCircle } from "lucide-react";
import { EmptyState } from "@/components/general/EmptyState";
import { requireRoleAccess } from "../roleBaseAccess";
import Link from "next/link";

async function getAllUsers(page: number = 1, pageSize: number = 10) {
  const skip = (page - 1) * pageSize;

  const [users, totalCount] = await Promise.all([
    prisma.user.findMany({
      take: pageSize,
      skip,
      select: {
        id: true,
        name: true,
        email: true,
        userType: true,
        onboardingCompleted: true,
        createdAt: true,
        approvalStatus: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.user.count(),
  ]);

  return {
    users,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
  };
}

type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function AllUsersTable({
  searchParams,
}: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const rewuireUserToAccessPage = await requireRoleAccess([
    "EDITOR",
    "SUPERADMIN",
  ]);

  const userRole = rewuireUserToAccessPage?.userType;

  const { users, totalCount, totalPages } = await getAllUsers(currentPage);

  const canSeeSection2 = userRole === "EDITOR" || userRole === "SUPERADMIN";
  const canSeeSection3 = userRole === "SUPERADMIN";

  return (
    <>
      <div className="text-xl flex justify-between font-bold bg-accent-foreground/5 p-2 mb-8">
        <h1>Manage All Users</h1>
        <div className="text-sm bg-primary text-white px-3 py-1 rounded-md">
          Total: {totalCount}
        </div>
      </div>

      {users.length > 0 ? (
        <div className="flex flex-col gap-6">
          <Card className="rounded-xs">
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>User Type</TableHead>
                    <TableHead>Onboarding</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Approval Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name ?? "N/A"}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        {canSeeSection3
                          ? user.userType === "ADVERTISER"
                            ? "Normal User"
                            : user.userType
                          : user.userType === "SUPERADMIN"
                          ? null
                          : user.userType === "ADVERTISER"
                          ? "Normal User"
                          : user.userType ?? "Unknown"}
                      </TableCell>
                      <TableCell>
                        {user.onboardingCompleted ? (
                          <CheckCircle className="text-green-500 w-4 h-4" />
                        ) : (
                          <XCircle className="text-red-500 w-4 h-4" />
                        )}
                      </TableCell>
                      <TableCell>
                        {new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </TableCell>
                      <TableCell>
                        {user.userType === "ADVERTISER"
                          ? null
                          : user.approvalStatus ?? "Pending"}
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

                            {canSeeSection3 && (
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/post-an-article/allusers/${user.id}/deleteuser`}
                                >
                                  <XCircle className="w-4 h-4 mr-2 text-red-600" />
                                  Delete
                                </Link>
                              </DropdownMenuItem>
                            )}

                            {canSeeSection2 && (
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/post-an-article/allusers/${user.id}/approvalstatus`}
                                >
                                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                  Update User Status
                                </Link>
                              </DropdownMenuItem>
                            )}

                            {canSeeSection3 && (
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/post-an-article/allusers/${user.id}/approvalstatus/createsompadok`}
                                >
                                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                  Update as Editor
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

          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <EmptyState
          title="No Users Found"
          description="There are currently no users in the system."
          buttonText="Go to Home"
          href="/"
        />
      )}
    </>
  );
}
