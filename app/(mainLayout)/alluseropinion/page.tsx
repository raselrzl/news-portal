import { trackRoute } from "@/app/utils/routeTracker";
import OpinionsList from "@/components/general/OpinionList";

export default async function OpinionsPage() {
  await trackRoute("Opinions");
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">অভিযোগসমূহ</h1>
      <div className=""><OpinionsList /></div>
    </main>
  );
}
