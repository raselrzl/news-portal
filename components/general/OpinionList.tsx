import { prisma } from "@/app/utils/db";
import { EmptyState } from "./EmptyState";

type Opinion = {
  id: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  opinion: string;
  createdAt: Date;
};

async function getAllOpinions(): Promise<Opinion[]> {
  return await prisma.opinion.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      opinion: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export default async function OpinionsList() {
  const opinions = await getAllOpinions();

  if (!opinions || opinions.length === 0) {
    return (
      <EmptyState
                title="উফ! এখনো কিছু দেখানোর মতো নেই।"
                description="এখনো কিছুই যুক্ত হয়নি। চোখ রাখুন!"
                buttonText="প্রথম পৃষ্ঠায় যেতে ক্লিক করুন"
                href="/"
              />
    );
  }

  return (
    <div className="p-4 grid md:grid-cols-2 gap-2">
      {opinions.map(({ id, name, opinion, email, phone, createdAt }) => (
        <div
          key={id}
          className="p-4 border rounded-md shadow-sm bg-white"
          aria-label={`অভিযোগ জমা দিয়েছেন: ${name}`}
        >
          <p className="text-gray-800 mb-2 text-justify italic">" {opinion} "</p>
          <div className="text-xs text-gray-600 flex flex-col sm:flex-row space-x-4">
            <div>
              <strong>নাম:</strong> {name}
          {/*     {email && <span className="ml-3"><strong>ইমেইল:</strong> {email}</span>}
              {phone && <span className="ml-3"><strong>ফোন:</strong> {phone}</span>} */}
            </div>
            <div>
              <strong>জমা দেওয়া হয়েছে:</strong>{" "}
              {new Date(createdAt).toLocaleDateString("bn-BD", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
