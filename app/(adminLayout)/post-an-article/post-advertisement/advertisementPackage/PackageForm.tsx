"use client";

import { useState, useEffect } from "react";
import { createAdvertisementPackage, getAllAdvertisementPackagePrices } from "@/app/actions";
import { advertisementPackages } from "./constantPackages";
import { Loader } from "lucide-react";


export default function PackageForm() {
  const [selectedPackageId, setSelectedPackageId] = useState(advertisementPackages[0].id);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [dbPrices, setDbPrices] = useState<Record<string, number>>({});



  // Fetch all package prices from DB
  useEffect(() => {
  async function fetchPrices() {
    const prices = await getAllAdvertisementPackagePrices();
    setDbPrices(prices);
    setPrice(prices[selectedPackageId] ?? 0);
  }
  fetchPrices();
}, []);

  useEffect(() => {
    setPrice(dbPrices[selectedPackageId] ?? 0);
  }, [selectedPackageId, dbPrices]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const pkg = advertisementPackages.find((p) => p.id === selectedPackageId);
    if (!pkg) return;

    try {
      const result = await createAdvertisementPackage({
        id: pkg.id,
        name: pkg.name,
        page: pkg.page,
        dailyPrice: price,
      });

      alert(
        result.status === "created"
          ? "Package created successfully!"
          : result.status === "updated"
          ? "Package price updated successfully!"
          : "No changes made."
      );

      setDbPrices((prev) => ({ ...prev, [pkg.id]: price }));
    } catch (err) {
      console.error(err);
      alert("Failed to save package");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
   <h1 className="text-xl font-bold bg-accent-foreground/5 p-2 mb-8">Manage Advertisement Packages</h1>
     
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="p-2 md:p-6 rounded-xs border-2 border-green-500 shadow-md mb-8 gap-2 md:gap-4"
      >
        <div className="grid grid-cols-2 gap-2 w-full text-sm">
          <label className="block mb-2 font-medium">
            Select Package
            <select
              value={selectedPackageId}
              onChange={(e) => setSelectedPackageId(e.target.value)}
              className="w-full border border-green-500 rounded-xs px-3 py-2 mt-1 h-10"
            >
              {advertisementPackages.map((pkg) => (
                <option key={pkg.id} value={pkg.id} className="dark:bg-accent">
                  {pkg.name} ({pkg.page})
                </option>
              ))}
            </select>
          </label>

          <label className="block mb-2 font-medium">
            Update Price (SEK)
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full border border-green-500 rounded-xs px-3 py-2 mt-1 h-10"
              min={0}
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white px-6 py-2 rounded-xs hover:bg-green-400 transition-colors h-10"
        >
          {loading ? <Loader className="animated-spin"/> : "Save"}
        </button>
      </form>

      {/* All Packages Display */}
      <h3 className="text-xl font-semibold mb-4">All Packages</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
        {advertisementPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`border rounded-xs p-2 shadow transition-shadow bg-accent-foreground/5 ${
              pkg.id === selectedPackageId ? "border-green-500 shadow-lg" : ""
            }`}
          >
            <h4 className="font-bold text-md">{pkg.name}</h4>
            <p className="text-sm">{pkg.page}</p>
            <p className="font-medium">
              Price: <span className="text-primary">SEK{dbPrices[pkg.id] ?? 0}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
