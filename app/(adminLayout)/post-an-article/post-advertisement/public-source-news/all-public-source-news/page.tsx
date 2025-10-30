// app/(dashboard)/public-news/page.tsx
import { prisma } from "@/app/utils/db";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type NewsType = {
  id: string;
  headings: string;
  sourceIdName: string;
  link: "FACEBOOK" | "INSTAGRAM" | "TWITTER";
  createdAt: Date;
  updatedAt: Date;
};

async function getAllNews(): Promise<NewsType[]> {
  return prisma.publicSourceNews.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export default async function PublicNewsPage() {
  const news = await getAllNews();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Public News</h1>

      <Card className="rounded-lg shadow-sm border border-gray-200">
        <CardContent className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="text-left">Heading</TableHead>
                <TableHead className="text-left">Source</TableHead>
                <TableHead className="text-left">Link</TableHead>
                <TableHead className="text-left">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {news.map((n, idx) => (
                <TableRow key={n.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <TableCell className="py-2 px-3">{n.headings}</TableCell>
                  <TableCell className="py-2 px-3">{n.sourceIdName}</TableCell>
                  <TableCell className="py-2 px-3">{n.link}</TableCell>
                  <TableCell className="py-2 px-3">{n.createdAt.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
