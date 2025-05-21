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
import { requireNewsReporter, requireSuperAdmin } from "@/app/utils/requireUser";
import { isNewsReporter, isNewsReporterOrSuperAdmin, supperAdmin } from "@/app/utils/ime";
import { auth } from "@/app/utils/auth";

async function getAllUsers() {
  const users = await prisma.user.findMany({
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
  });
  return users;
}

export default async function AllUsersTable() {
  const users = await getAllUsers();
  const superadmin = await requireNewsReporter();
  let user = await auth();
  let email = user?.user?.email;

  const isSuperAdmin = await supperAdmin(email);
  const newsReporterOrSuperAdmin = await isNewsReporterOrSuperAdmin(email);

  return (
    <>
      {users.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
            <CardDescription>
              View all registered users and their roles.
            </CardDescription>
          </CardHeader>
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
                    <TableCell>{user.userType ?? "Unknown"}</TableCell>
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
                      {user.approvalStatus ? user.approvalStatus : "Pending"}
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
                          {/*  <DropdownMenuItem asChild>
                            <Link href={`/post-an-article/alaarticles/editarticle`}>
                              <PenBoxIcon className="w-4 h-4 mr-2" />
                              Edit
                            </Link>
                          </DropdownMenuItem> */}
                          <DropdownMenuSeparator />

                          {isSuperAdmin && (
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/post-an-article/allusers/${user.id}/deleteuser`}
                              >
                                <XCircle className="w-4 h-4 mr-2 text-red-600" />
                                ডিলিট করুন
                              </Link>
                            </DropdownMenuItem>
                          )}

                          {newsReporterOrSuperAdmin &&(
                              <DropdownMenuItem asChild>
                              <Link
                                href={`/post-an-article/allusers/${user.id}/approvalstatus`}
                              >
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                ইউজার স্ট্যাটাস
                              </Link>
                              </DropdownMenuItem>
                          )}

                         
                          {isSuperAdmin && (
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/post-an-article/allusers/${user.id}/approvalstatus/createsompadok`}
                              >
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                সম্পাদক হিসেবে আপডেট করুন
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
          title="No Users Found"
          description="There are currently no users in the system."
          buttonText="Go to Home"
          href="/"
        />
      )}
    </>
  );
}
