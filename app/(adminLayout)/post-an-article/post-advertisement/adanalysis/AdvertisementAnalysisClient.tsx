"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { format, differenceInDays } from "date-fns";
import { EmptyState } from "@/components/general/EmptyState";
import { useState, useEffect, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AdvertisementWithProfile = {
  id: string;
  companyName: string;
  supervisedName: string;
  advertisedCategory: string;
  country: string | null;
  dailyPrice: number;
  discount: number;
  moms: number;
  advertiseStatus: string;
  createdAt: Date;
  startDate: string;
  endDate: string;

  advertiseCollectedByName?: string | null;
  advertiseCollectedByEmail?: string | null;
  advertiseCollectedByPhone?: string | null;
  advertiseCollectedByCountry?: string | null;
};

interface Props {
  serverAds: AdvertisementWithProfile[];
}

export default function AdvertisementAnalysisClient({ serverAds }: Props) {
  const [ads, setAds] = useState<AdvertisementWithProfile[]>(
    serverAds.map((ad) => ({
      ...ad,
      startDate: ad.startDate ? new Date(ad.startDate).toISOString() : "",
      endDate: ad.endDate ? new Date(ad.endDate).toISOString() : "",
    }))
  );
  const [filteredAds, setFilteredAds] =
    useState<AdvertisementWithProfile[]>(serverAds);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [collectedByFilter, setCollectedByFilter] = useState<string | null>(
    null
  );

  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    let temp = [...ads];
    if (collectedByFilter) {
      temp = temp.filter(
        (ad) =>
          ad.advertiseCollectedByName
            ?.toLowerCase()
            .includes(collectedByFilter.toLowerCase()) ||
          ad.advertiseCollectedByEmail
            ?.toLowerCase()
            .includes(collectedByFilter.toLowerCase()) ||
          ad.advertiseCollectedByPhone
            ?.toLowerCase()
            .includes(collectedByFilter.toLowerCase()) ||
          ad.advertiseCollectedByCountry
            ?.toLowerCase()
            .includes(collectedByFilter.toLowerCase())
      );
    }

    if (search) {
      temp = temp.filter(
        (ad) =>
          ad.companyName.toLowerCase().includes(search.toLowerCase()) ||
          ad.supervisedName.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (categoryFilter)
      temp = temp.filter((ad) => ad.advertisedCategory === categoryFilter);
    if (statusFilter)
      temp = temp.filter((ad) => ad.advertiseStatus === statusFilter);

    setFilteredAds(temp);
    setPage(1);
  }, [search, categoryFilter, statusFilter, ads, collectedByFilter]);

  const totalPages = Math.ceil(filteredAds.length / pageSize);
  const paginatedAds = filteredAds.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const clearFilters = () => {
    setSearch("");
    setCategoryFilter(null);
    setStatusFilter(null);
    setCollectedByFilter(null);
  };

  // Calculate totals and durations
  const calculateTotal = (ad: AdvertisementWithProfile) => {
    const duration =
      ad.startDate && ad.endDate
        ? differenceInDays(new Date(ad.endDate), new Date(ad.startDate)) + 1
        : 1;
    const base = ad.dailyPrice * duration;
    const discountAmt = base * (ad.discount / 100);
    const withDiscount = base - discountAmt;
    const momsAmt = withDiscount * (ad.moms / 100);
    return {
      base,
      discountAmt,
      momsAmt,
      withDiscount,
      totalWithMoms: withDiscount + momsAmt,
      duration,
    };
  };

  // Summary calculations
  const summary = useMemo(() => {
    let totalActive = 0,
      totalDraft = 0,
      totalExpired = 0,
      totalDays = 0,
      totalBase = 0,
      totalDiscountAmt = 0,
      totalExclMoms = 0,
      totalInclMoms = 0;

    filteredAds.forEach((ad) => {
      const { base, discountAmt, withDiscount, totalWithMoms, duration } =
        calculateTotal(ad);
      totalDays += duration;
      totalBase += base;
      totalDiscountAmt += discountAmt;
      totalExclMoms += withDiscount;
      totalInclMoms += totalWithMoms;
      if (ad.advertiseStatus === "ACTIVE") totalActive++;
      if (ad.advertiseStatus === "DRAFT") totalDraft++;
      if (ad.advertiseStatus === "EXPIRED") totalExpired++;
    });

    return {
      totalActive,
      totalDraft,
      totalExpired,
      totalDays,
      totalBase,
      totalDiscountAmt,
      totalExclMoms,
      totalInclMoms,
    };
  }, [filteredAds]);

  const summaryByStatus = useMemo(() => {
    const statuses = ["ACTIVE", "DRAFT", "EXPIRED"];
    const result: Record<string, any> = {};
    statuses.forEach((status) => {
      const filtered = filteredAds.filter(
        (ad) => ad.advertiseStatus === status
      );
      let totalDays = 0,
        totalBase = 0,
        totalDiscountAmt = 0,
        totalExclMoms = 0,
        totalInclMoms = 0;

      filtered.forEach((ad) => {
        const { base, discountAmt, withDiscount, totalWithMoms, duration } =
          calculateTotal(ad);
        totalDays += duration;
        totalBase += base;
        totalDiscountAmt += discountAmt;
        totalExclMoms += withDiscount;
        totalInclMoms += totalWithMoms;
      });

      result[status] = {
        count: filtered.length,
        totalDays,
        totalBase,
        totalDiscountAmt,
        totalExclMoms,
        totalInclMoms,
      };
    });

    return result;
  }, [filteredAds]);

  // Category totals with full breakdown
  const categoryTotals = useMemo(() => {
    const totals: Record<
      string,
      {
        count: number;
        totalBase: number;
        totalDiscount: number;
        totalExclMoms: number;
        totalInclMoms: number;
      }
    > = {};

    filteredAds.forEach((ad) => {
      const { base, discountAmt, withDiscount, totalWithMoms } =
        calculateTotal(ad);
      if (!totals[ad.advertisedCategory])
        totals[ad.advertisedCategory] = {
          count: 0,
          totalBase: 0,
          totalDiscount: 0,
          totalExclMoms: 0,
          totalInclMoms: 0,
        };
      totals[ad.advertisedCategory].count += 1;
      totals[ad.advertisedCategory].totalBase += base;
      totals[ad.advertisedCategory].totalDiscount += discountAmt;
      totals[ad.advertisedCategory].totalExclMoms += withDiscount;
      totals[ad.advertisedCategory].totalInclMoms += totalWithMoms;
    });

    return totals;
  }, [filteredAds]);

  return (
    <div className="">
      {/* Title and total */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Advertisement Analysis</h1>
        <div className="text-sm bg-primary text-white px-3 py-1 rounded-md">
          Total Ads: {filteredAds.length}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4 items-end">
        <Input
          placeholder="Search by Company or Supervisor"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Input
          placeholder="Filter by Advertisement collected By (Name, Email, Phone, Country)"
          value={collectedByFilter || ""}
          onChange={(e) => setCollectedByFilter(e.target.value || null)}
        />

        <Select onValueChange={(value) => setCategoryFilter(value || null)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            {[
              "PREMIER_1",
              "PREMIER_2",
              "SIZE_1",
              "SIZE_2",
              "SUPER_1",
              "SUPER_2",
              "PREMIUM_1",
              "PREMIUM_2",
              "STANDARD_1",
              "STANDARD_2",
              "DELUXE_1",
              "DELUXE_2",
              "ULTIMATE_1",
              "ULTIMATE_2",
              "BASIC_1",
              "BASIC_2",
              "PRO_1",
              "PRO_2",
              "ENTERPRISE_1",
              "ENTERPRISE_2",
            ].map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setStatusFilter(value || null)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            {["ACTIVE", "DRAFT", "EXPIRED"].map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={clearFilters} variant="outline">
          Clear Filters
        </Button>
      </div>

      {/* Empty state */}
      {filteredAds.length === 0 ? (
        <EmptyState
          title="No advertisements found"
          description="Try changing your filters or search term"
          buttonText="Reset Filters"
          href="/post-an-article/post-advertisement/alladvertise"
        />
      ) : (
        <Card className="overflow-x-auto hover:shadow-lg transition-shadow">
          <CardContent>
            {/* Main Table */}
            <Table>
              <TableHeader>
                <TableRow className="bg-amber-600 hover:bg-amber-500">
                  <TableHead>Advertisement Collected By</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Supervisor</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Price / Per day (SEK)</TableHead>
                  <TableHead>Start → End</TableHead>
                  <TableHead>Duration (Days)</TableHead>
                  <TableHead>Discount (%)</TableHead>
                  <TableHead>Moms (%)</TableHead>
                  <TableHead>Total (SEK)</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {paginatedAds.map((ad) => {
                  const { totalWithMoms, duration } = calculateTotal(ad);
                  return (
                    <TableRow
                      key={ad.id}
                      className="hover:bg-muted/30 cursor-pointer transition-colors"
                    >
                      <TableCell>
                        <div className="flex flex-col border-l border-primary pl-2">
                          <span>{ad.advertiseCollectedByName || "-"}</span>
                          {/*   <span>{ad.advertiseCollectedByEmail || "-"}</span>
                          <span>{ad.advertiseCollectedByPhone || "-"}</span>
                          <span>{ad.advertiseCollectedByCountry || "-"}</span> */}
                        </div>
                      </TableCell>
                      <TableCell>{ad.companyName}</TableCell>
                      <TableCell>{ad.supervisedName}</TableCell>
                      <TableCell>{ad.advertisedCategory}</TableCell>
                      <TableCell>{ad.country || "-"}</TableCell>
                      <TableCell>{ad.dailyPrice}</TableCell>
                      <TableCell>
                        {ad.startDate && ad.endDate
                          ? `${format(
                              new Date(ad.startDate),
                              "yyyy-MM-dd"
                            )} → ${format(new Date(ad.endDate), "yyyy-MM-dd")}`
                          : "-"}
                      </TableCell>
                      <TableCell>{duration}</TableCell>
                      <TableCell>{ad.discount || 0}%</TableCell>
                      <TableCell>{ad.moms || 25}%</TableCell>
                      <TableCell>{totalWithMoms.toFixed(2)}</TableCell>
                      <TableCell>{ad.advertiseStatus}</TableCell>
                      <TableCell>
                        {format(new Date(ad.createdAt), "yyyy-MM-dd")}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-4">
              <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>
                Prev
              </Button>
              <span className="flex items-center">
                {page} / {totalPages}
              </span>
              <Button
                disabled={page >= totalPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </Button>
            </div>

            {/* Tabs */}
            <div className="mt-10">
              <Tabs defaultValue="overall" className="w-full">
                <TabsList className="flex flex-wrap  mb-8">
                  <TabsTrigger className="bg-amber-700" value="overall">
                    Summary
                  </TabsTrigger>
                  <TabsTrigger className="bg-amber-700" value="status">
                    Status
                  </TabsTrigger>
                  <TabsTrigger className="bg-amber-700" value="category">
                    Category
                  </TabsTrigger>
                  <TabsTrigger className="bg-amber-700" value="country">
                    Country
                  </TabsTrigger>
                  <TabsTrigger className="bg-amber-700" value="company">
                    Company
                  </TabsTrigger>
                  <TabsTrigger className="bg-amber-700" value="collectedBy">
                    Ads. Collected By
                  </TabsTrigger>
                </TabsList>

                {/* Overall */}
                <TabsContent value="overall">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="p-4 bg-muted/30 rounded-lg border hover:shadow-lg transition-shadow">
                      <strong>Active Ads:</strong> {summary.totalActive}
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg border hover:shadow-lg transition-shadow">
                      <strong>Draft Ads:</strong> {summary.totalDraft}
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg border hover:shadow-lg transition-shadow">
                      <strong>Expired Ads:</strong> {summary.totalExpired}
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg border hover:shadow-lg transition-shadow">
                      <strong>Total Days:</strong> {summary.totalDays}
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg border hover:shadow-lg transition-shadow">
                      <strong>Total Base:</strong>{" "}
                      {summary.totalBase.toFixed(2)} SEK
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg border hover:shadow-lg transition-shadow">
                      <strong>Total Discount:</strong>{" "}
                      {summary.totalDiscountAmt.toFixed(2)} SEK
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg border hover:shadow-lg transition-shadow">
                      <strong>Total Excl. Moms:</strong>{" "}
                      {summary.totalExclMoms.toFixed(2)} SEK
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg border hover:shadow-lg transition-shadow">
                      <strong>Total Incl. Moms:</strong>{" "}
                      {summary.totalInclMoms.toFixed(2)} SEK
                    </div>
                  </div>
                </TabsContent>

                {/* By Status */}
                <TabsContent value="status">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["ACTIVE", "DRAFT", "EXPIRED"].map((status) => {
                      const s = summaryByStatus[status];
                      return (
                        <div
                          key={status}
                          className="p-4 border rounded-lg bg-muted/20 hover:shadow-lg transition-shadow"
                        >
                          <h3 className="font-semibold mb-2">{status} Ads</h3>
                          <p>
                            <strong>Total Count:</strong> {s.count}
                          </p>
                          <p>
                            <strong>Total Days:</strong> {s.totalDays}
                          </p>
                          <p>
                            <strong>Total Base:</strong>{" "}
                            {s.totalBase.toFixed(2)} SEK
                          </p>
                          <p>
                            <strong>Total Discount:</strong>{" "}
                            {s.totalDiscountAmt.toFixed(2)} SEK
                          </p>
                          <p>
                            <strong>Total Excl. Moms:</strong>{" "}
                            {s.totalExclMoms.toFixed(2)} SEK
                          </p>
                          <p>
                            <strong>Total Incl. Moms:</strong>{" "}
                            {s.totalInclMoms.toFixed(2)} SEK
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>

                {/* By Category */}
                <TabsContent value="category">
                  {(() => {
                    const categoryEntries = Object.entries(categoryTotals);

                    // Pagination setup
                    const itemsPerPage = 6;
                    const totalPages = Math.ceil(
                      categoryEntries.length / itemsPerPage
                    );
                    const startIndex = (page - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    const paginatedCategories = categoryEntries.slice(
                      startIndex,
                      endIndex
                    );

                    return (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {paginatedCategories.map(([category, stats]) => (
                            <div
                              key={category}
                              className="p-4 border rounded-lg bg-background hover:shadow-lg transition-shadow border-primary"
                            >
                              <h3 className="font-semibold mb-2">{category}</h3>
                              <p>
                                <strong>Total Ads:</strong> {stats.count}
                              </p>
                              <p>
                                <strong>Total Base:</strong>{" "}
                                {stats.totalBase.toFixed(2)} SEK
                              </p>
                              <p>
                                <strong>Total Discount:</strong>{" "}
                                {stats.totalDiscount.toFixed(2)} SEK
                              </p>
                              <p>
                                <strong>Total Excl. Moms:</strong>{" "}
                                {stats.totalExclMoms.toFixed(2)} SEK
                              </p>
                              <p>
                                <strong>Total Incl. Moms:</strong>{" "}
                                {stats.totalInclMoms.toFixed(2)} SEK
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center gap-2 mt-4">
                          <Button
                            disabled={page <= 1}
                            onClick={() => setPage(page - 1)}
                          >
                            Prev
                          </Button>
                          <span className="flex items-center">
                            {page} / {totalPages}
                          </span>
                          <Button
                            disabled={page >= totalPages}
                            onClick={() => setPage(page + 1)}
                          >
                            Next
                          </Button>
                        </div>
                      </>
                    );
                  })()}
                </TabsContent>

                {/* By Country */}
                <TabsContent value="country">
                  {(() => {
                    // Calculate country-level summaries
                    const countryStats = Object.entries(
                      filteredAds.reduce((acc, ad) => {
                        const country = ad.country || "Unknown";
                        const {
                          base,
                          discountAmt,
                          withDiscount,
                          totalWithMoms,
                        } = calculateTotal(ad);
                        if (!acc[country]) {
                          acc[country] = {
                            count: 0,
                            totalBase: 0,
                            totalDiscountAmt: 0,
                            totalExclMoms: 0,
                            totalInclMoms: 0,
                          };
                        }
                        acc[country].count += 1;
                        acc[country].totalBase += base;
                        acc[country].totalDiscountAmt += discountAmt;
                        acc[country].totalExclMoms += withDiscount;
                        acc[country].totalInclMoms += totalWithMoms;
                        return acc;
                      }, {} as Record<string, any>)
                    );

                    // Pagination setup
                    const itemsPerPage = 6;
                    const totalPages = Math.ceil(
                      countryStats.length / itemsPerPage
                    );
                    const startIndex = (page - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    const paginatedCountries = countryStats.slice(
                      startIndex,
                      endIndex
                    );

                    return (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {paginatedCountries.map(([country, stats]) => (
                            <div
                              key={country}
                              className="p-4 border rounded-lg bg-background hover:shadow-lg transition-shadow border-primary"
                            >
                              <h3 className="font-semibold mb-2">{country}</h3>
                              <p>
                                <strong>Total Ads:</strong> {stats.count}
                              </p>
                              <p>
                                <strong>Total Base:</strong>{" "}
                                {stats.totalBase.toFixed(2)} SEK
                              </p>
                              <p>
                                <strong>Total Discount:</strong>{" "}
                                {stats.totalDiscountAmt.toFixed(2)} SEK
                              </p>
                              <p>
                                <strong>Total Excl. Moms:</strong>{" "}
                                {stats.totalExclMoms.toFixed(2)} SEK
                              </p>
                              <p>
                                <strong>Total Incl. Moms:</strong>{" "}
                                {stats.totalInclMoms.toFixed(2)} SEK
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center gap-2 mt-4">
                          <Button
                            disabled={page <= 1}
                            onClick={() => setPage(page - 1)}
                          >
                            Prev
                          </Button>
                          <span className="flex items-center">
                            {page} / {totalPages}
                          </span>
                          <Button
                            disabled={page >= totalPages}
                            onClick={() => setPage(page + 1)}
                          >
                            Next
                          </Button>
                        </div>
                      </>
                    );
                  })()}
                </TabsContent>

                {/* By Company */}
                <TabsContent value="company">
                  {/* Calculate company-level summaries */}
                  {(() => {
                    const companyStats = Object.entries(
                      filteredAds.reduce((acc, ad) => {
                        const company = ad.companyName || "Unknown Company";
                        const {
                          base,
                          discountAmt,
                          withDiscount,
                          totalWithMoms,
                        } = calculateTotal(ad);
                        if (!acc[company]) {
                          acc[company] = {
                            count: 0,
                            totalBase: 0,
                            totalDiscountAmt: 0,
                            totalExclMoms: 0,
                            totalInclMoms: 0,
                          };
                        }
                        acc[company].count += 1;
                        acc[company].totalBase += base;
                        acc[company].totalDiscountAmt += discountAmt;
                        acc[company].totalExclMoms += withDiscount;
                        acc[company].totalInclMoms += totalWithMoms;
                        return acc;
                      }, {} as Record<string, any>)
                    );

                    // Pagination setup
                    const itemsPerPage = 6;
                    const totalPages = Math.ceil(
                      companyStats.length / itemsPerPage
                    );
                    const startIndex = (page - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    const paginatedCompanies = companyStats.slice(
                      startIndex,
                      endIndex
                    );

                    return (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {paginatedCompanies.map(([company, stats]) => (
                            <div
                              key={company}
                              className="p-4 border rounded-lg bg-background hover:shadow-lg transition-shadow border-primary"
                            >
                              <h3 className="font-semibold mb-2">{company}</h3>
                              <p>
                                <strong>Total Ads:</strong> {stats.count}
                              </p>
                              <p>
                                <strong>Total Base:</strong>{" "}
                                {stats.totalBase.toFixed(2)} SEK
                              </p>
                              <p>
                                <strong>Total Discount:</strong>{" "}
                                {stats.totalDiscountAmt.toFixed(2)} SEK
                              </p>
                              <p>
                                <strong>Total Excl. Moms:</strong>{" "}
                                {stats.totalExclMoms.toFixed(2)} SEK
                              </p>
                              <p>
                                <strong>Total Incl. Moms:</strong>{" "}
                                {stats.totalInclMoms.toFixed(2)} SEK
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center gap-2 mt-4">
                          <Button
                            disabled={page <= 1}
                            onClick={() => setPage(page - 1)}
                          >
                            Prev
                          </Button>
                          <span className="flex items-center">
                            {page} / {totalPages}
                          </span>
                          <Button
                            disabled={page >= totalPages}
                            onClick={() => setPage(page + 1)}
                          >
                            Next
                          </Button>
                        </div>
                      </>
                    );
                  })()}
                </TabsContent>

                <TabsContent value="collectedBy">
                  {/* Paginated collected ads */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border">
                    {paginatedAds.map((ad) => {
                      const {
                        totalWithMoms,
                        duration,
                        base,
                        discountAmt,
                        withDiscount,
                      } = calculateTotal(ad);
                      return (
                        <div
                          key={ad.id}
                          className="p-4 border rounded-lg bg-background hover:shadow-lg transition-shadow border-primary"
                        >
                          <h3 className="font-semibold mb-2">
                            Ads Company Name: {ad.companyName}
                          </h3>
                          <p>
                            <strong>Collected By Name:</strong>{" "}
                            {ad.advertiseCollectedByName || "-"}
                          </p>
                          <p>
                            <strong>Email:</strong>{" "}
                            {ad.advertiseCollectedByEmail || "-"}
                          </p>
                          <p>
                            <strong>Phone:</strong>{" "}
                            {ad.advertiseCollectedByPhone || "-"}
                          </p>
                          <p>
                            <strong>Country:</strong>{" "}
                            {ad.advertiseCollectedByCountry || "-"}
                          </p>
                          <hr className="my-2" />
                          <p>
                            <strong>Start → End:</strong>{" "}
                            {ad.startDate && ad.endDate
                              ? `${format(
                                  new Date(ad.startDate),
                                  "yyyy-MM-dd"
                                )} → ${format(
                                  new Date(ad.endDate),
                                  "yyyy-MM-dd"
                                )}`
                              : "-"}
                          </p>
                          <p>
                            <strong>Duration:</strong> {duration} Days
                          </p>
                          <p>
                            <strong>Base:</strong> {base.toFixed(2)} SEK
                          </p>
                          <p>
                            <strong>Discount:</strong> {discountAmt.toFixed(2)}{" "}
                            SEK
                          </p>
                          <p>
                            <strong>Total Excl. Moms:</strong>{" "}
                            {withDiscount.toFixed(2)} SEK
                          </p>
                          <p>
                            <strong>Total Incl. Moms:</strong>{" "}
                            {totalWithMoms.toFixed(2)} SEK
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Pagination for collected ads */}
                  <div className="flex justify-center gap-2 mt-4">
                    <Button
                      disabled={page <= 1}
                      onClick={() => setPage(page - 1)}
                    >
                      Prev
                    </Button>
                    <span className="flex items-center">
                      {page} / {totalPages}
                    </span>
                    <Button
                      disabled={page >= totalPages}
                      onClick={() => setPage(page + 1)}
                    >
                      Next
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
