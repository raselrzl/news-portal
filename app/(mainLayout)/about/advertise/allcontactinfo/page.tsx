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
import { EmptyState } from "@/components/general/EmptyState";

async function getAllAdvertiseRequests() {
  return await prisma.advertiseRequest.findMany({
    orderBy: {
      createdAt: "desc",
    },
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
  });
}

export default async function AllAdvertiseRequestsTable() {
  const requests = await getAllAdvertiseRequests();
  const superadmin = await requireSuperAdmin();

  return (
    <>
      {requests.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>All Advertisement Requests</CardTitle>
            <CardDescription>Recent submissions from interested advertisers.</CardDescription>
          </CardHeader>
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
                      <a href={req.companyWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        {req.companyWebsite}
                      </a>
                    </TableCell>
                    <TableCell className="max-w-sm">
                      <p className="line-clamp-1">
                        {req.message.split(" ").slice(0, 6).join(" ")}...
                      </p>
                    </TableCell>
                    <TableCell>
                      {format(new Date(req.createdAt), "yyyy-MM-dd HH:mm")}
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
                              href={`/about/advertise/allcontactinfo/${req.id}/delete`}
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
        <EmptyState
          title="উফ! এখনো কিছু দেখানোর মতো নেই।"
          description="এখনো কিছুই যুক্ত হয়নি। চোখ রাখুন!"
          buttonText="প্রথম পৃষ্ঠায় যেতে ক্লিক করুন"
          href="/"
        />
      )}
    </>
  );
}
