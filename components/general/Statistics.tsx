// app/server/statistics.tsx (This can be a server component)
import { prisma } from "@/app/utils/db";
import { notFound } from "next/navigation";

// Utility function to fetch counts for various models
async function getStatistics() {
  try {
    const totalUsers = await prisma.user.count();
    const totalNewsReporters = await prisma.newsReporter.count();
    const totalAdvertisements = await prisma.advertisement.count();
    const totalNewsArticles = await prisma.newsArticle.count();
    const totalOpinions = await prisma.opinion.count();
    const totalVideos = await prisma.videopost.count();
    const totalAdvertiseRequests = await prisma.advertiseRequest.count();
    const totalSompandoks = await prisma.user.count({
      where: { userType: "SOMPANDOK" },
    });
    const totalDrafts = await prisma.newsArticle.count({
      where: { newsArticleStatus: "DRAFT" },
    });
    const totalRegisteredUsers = await prisma.user.count({
      where: { onboardingCompleted: true },
    });

    return {
      totalUsers,
      totalNewsReporters,
      totalAdvertisements,
      totalNewsArticles,
      totalOpinions,
      totalVideos,
      totalAdvertiseRequests,
      totalSompandoks,
      totalDrafts,
      totalRegisteredUsers,
    };
  } catch (error) {
    console.error("Error fetching statistics:", error);
    return null;
  }
}

// Server Component that will display the statistics
const Statistics = async () => {
  const stats = await getStatistics();

  // If no stats found, show a not found page
  if (!stats) {
    notFound();
  }

  return (
    <div className="p-8 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Users Card */}
        <div className="p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-orange">Users</h2>
          <p className="text-3xl font-bold mt-4">{stats.totalUsers}</p>
        </div>

        {/* Total News Reporters Card */}
        <div className=" p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-orange">
            News Reporters
          </h2>
          <p className="text-3xl font-bold mt-4">{stats.totalNewsReporters}</p>
        </div>

        {/* Total Advertisements Card */}
        <div className="p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-orange">
             Advertisements
          </h2>
          <p className="text-3xl font-bold mt-4">{stats.totalAdvertisements}</p>
        </div>

        {/* Total News Articles Card */}
        <div className="p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-orange">
             News Articles
          </h2>
          <p className="text-3xl font-bold mt-4">{stats.totalNewsArticles}</p>
        </div>

        {/* Total Opinions Card */}
        <div className="p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-orange"> Opinions</h2>
          <p className="text-3xl font-bold mt-4">{stats.totalOpinions}</p>
        </div>

        {/* Total Videos Card */}
        <div className="p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-orange">Total Videos</h2>
          <p className="text-3xl font-bold mt-4">{stats.totalVideos}</p>
        </div>

        {/* Total Advertise Requests Card */}
        <div className="p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-orange">
             Advertise Requests
          </h2>
          <p className="text-3xl font-bold mt-4">
            {stats.totalAdvertiseRequests}
          </p>
        </div>

        {/* Total Sompandoks Card */}
        <div className="p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-orange">
             Sompandoks
          </h2>
          <p className="text-3xl font-bold mt-4">{stats.totalSompandoks}</p>
        </div>

        {/* Total Drafts Card */}
        <div className="p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-orange">Total Drafts</h2>
          <p className="text-3xl font-bold mt-4">{stats.totalDrafts}</p>
        </div>

        {/* Total Registered Users Card */}
        <div className="p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-md font-semibold text-orange">
             Registered Users
          </h2>
          <p className="text-3xl font-bold mt-4">
            {stats.totalRegisteredUsers}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
