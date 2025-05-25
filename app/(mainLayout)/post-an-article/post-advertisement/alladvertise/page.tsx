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
import { advertiseStatus } from "@/lib/generated/prisma";
import { requireSompandokOrSuperAdmin } from "@/app/utils/requireUser";
import { redirect } from "next/navigation";

async function getAllAdvertisements() {
    const ads = await prisma.advertisement.findMany({
      select: {
        id: true,
        companyName: true,
        companyaddress: true,
        supervisedName: true,
        supervisedPhonenumber: true,
        advertisedCategory: true,
        websiteLink: true,
        additionalInfo: true,
        advertiseBanner: true,
        isFeatured: true,
        endDate: true,
        startDate: true,
        advertiseduration: true,
        advertiseStatus: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  
    return ads;
  }
  

export default async function AllAdvertisementTable() {
  const ads = await getAllAdvertisements();
   const SompandokOrSuperAdmin = await requireSompandokOrSuperAdmin();
    if (!SompandokOrSuperAdmin) {
      return redirect("/restricted");
    }

  return (
    <>
      {ads.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>All Advertisements</CardTitle>
            <CardDescription>
              View all active and inactive advertisements.
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company</TableHead>
                  <TableHead>Supervisor</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Start</TableHead>
                  <TableHead>End</TableHead>
                  <TableHead>Banner</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ads.map((ad) => (
                  <TableRow key={ad.id}>
                    <TableCell>{ad.companyName}</TableCell>
                    <TableCell>{ad.supervisedName}</TableCell>
                    <TableCell>{ad.advertisedCategory}</TableCell>
                    <TableCell>
                   {/*  {ad.advertiseStatus === advertiseStatus.ACTIVE ? (
                            <CheckCircle className="text-green-600 w-4 h-4" />
                            ) : (
                            <XCircle className="text-red-600 w-4 h-4" />
                            )} */}

                            {ad.advertiseStatus}
                    </TableCell>
                    <TableCell>{ad.advertiseduration ?? "N/A"}</TableCell>
                    <TableCell>{ad.startDate}</TableCell>
                    <TableCell>{ad.endDate}</TableCell>
                    <TableCell>
                      <Image
                        src={ad.advertiseBanner}
                        alt={ad.companyName}
                        width={100}
                        height={50}
                        className="rounded"
                      />
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
                            <Link href={`/post-an-article/post-advertisement/alladvertise/${ad.id}/updatestatus`}>
                              <PenBoxIcon className="w-4 h-4 mr-2" />
                              Update Status
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href={`/post-an-article/post-advertisement/alladvertise/${ad.id}/delete`}>
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
