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
import { EmptyState } from "@/components/general/EmptyState";
import { requireNewsReporter } from "@/app/utils/requireUser";
import { getCurrentUserType } from "@/app/utils/getCurrentUserType";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { requireRoleAccess } from "../../roleBaseAccess";

async function getAllAdvertiseRequests(
  page: number = 1,
  pageSize: number = 10
) {
  const skip = (page - 1) * pageSize;

  const [data, totalCount] = await Promise.all([
    prisma.advertiseRequest.findMany({
      take: pageSize,
      skip: skip,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        companyName: true,
        companyWebsite: true,
        phoneNumber: true,
        message: true,
        createdAt: true,
      },
    }),
    prisma.advertiseRequest.count(),
  ]);

  return {
    requests: data,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
  };
}

type SearchParamsProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function AllAdvertiseRequestsTable({
  searchParams,
}: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
   const rewuireUserToAccessPage = await requireRoleAccess([
        "EDITOR",
        "SUPERADMIN"
      ]);

  await requireNewsReporter();
  const currentUser = await getCurrentUserType();
  const userType = currentUser?.userType;
  const isPrivilegedUser =
    userType === "EDITOR" || userType === "SUPERADMIN";

  const { requests, totalCount, totalPages } = await getAllAdvertiseRequests(
    currentPage
  );

  return (
    <>
      <div className="flex items-center justify-between mb-8 bg-accent-foreground/5 p-2">
        <h1 className="text-xl font-bold">Manage Advertisement Requests</h1>
        <div className="text-sm bg-primary text-white px-3 py-1 rounded-md">
          Total: {totalCount}
        </div>
      </div>

      {requests.length > 0 ? (
        <div className="flex flex-col gap-6 px-2">
          <Card className="rounded-xs">
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Website</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((req) => (
                    <TableRow key={req.id}>
                      <TableCell>{req.name}</TableCell>
                      <TableCell>{req.email}</TableCell>
                      <TableCell>{req.phoneNumber}</TableCell>
                      <TableCell>{req.companyName}</TableCell>
                      <TableCell>
                        <a
                          href={
                            req.companyWebsite.startsWith("http")
                              ? req.companyWebsite
                              : `https://${req.companyWebsite}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 underline"
                        >
                          {req.companyWebsite}
                        </a>
                      </TableCell>
                      <TableCell className="max-w-sm">
                        {req.message.length > 50 ? (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                View Message
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-lg">
                              <DialogHeader>
                                <DialogTitle>
                                  Message from {req.name}
                                </DialogTitle>
                              </DialogHeader>
                              <p className="whitespace-pre-wrap">
                                {req.message}
                              </p>
                            </DialogContent>
                          </Dialog>
                        ) : (
                          <p>{req.message}</p>
                        )}
                      </TableCell>
                      <TableCell>
                        {format(new Date(req.createdAt), "yyyy-MM-dd HH:mm")}
                      </TableCell>
                      <TableCell className="text-right">
                        {isPrivilegedUser && (
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
                                  href={`/post-an-article/advertise/allcontactinfo/${req.id}/delete`}
                                  className="text-red-600"
                                >
                                  <XCircle className="w-4 h-4 mr-2" />
                                  Delete
                                </Link>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* ✅ Pagination */}
          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <EmptyState
          title="Oops! There's nothing to show yet."
          description="Nothing has been added yet. Stay tuned!"
          buttonText="Click here to go to the homepage"
          href="/"
        />
      )}
    </>
  );
}
