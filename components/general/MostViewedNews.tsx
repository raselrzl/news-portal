import { prisma } from "@/app/utils/db";

type NewsStats = {
  id: string;
  reporterName: string;
  newsHeading: string;
  viewCount: number;
};

export default async function NewsStatsTable() {
  // Fetch all news articles with reporter info
  const articles = await prisma.newsArticle.findMany({
    orderBy: {
      viewCount: "desc", // most viewed first
    },
    select: {
      id: true,
      newsHeading: true,
      viewCount: true,
      newsReporter: {
        select: {
          reporterName: true,
        },
      },
    },
    take:10
  });

  // Map to simple structure
  const data: NewsStats[] = articles.map((article) => ({
    id: article.id,
    reporterName: article.newsReporter?.reporterName || "Unknown",
    newsHeading: article.newsHeading,
    viewCount: article.viewCount ?? 0, // ensure number
  }));

  return (
    <div className="overflow-x-auto my-6">
      <table className="table-auto border-collapse border border-gray-800 w-full">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Reporter</th>
            <th className="border border-gray-300 px-4 py-2">Views</th>
            <th className="border border-gray-300 px-4 py-2">News Heading</th>
          </tr>
        </thead>
        <tbody>
          {data.map((article) => (
            <tr key={article.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{article.reporterName}</td>
              <td className="border border-gray-300 px-4 py-2">{article.viewCount}</td>
              <td className="border border-gray-300 px-4 py-2">{article.newsHeading}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
