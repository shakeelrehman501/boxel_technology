"use client";

export default function PortfolioSkeleton() {
  return (
    <div className="p-6">
      
      {/* ===== Top Tabs Skeleton ===== */}
      <div className="flex justify-center gap-4 mb-10">
        <div className="h-8 w-16 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="h-8 w-20 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="h-8 w-20 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="h-8 w-20 bg-gray-300 rounded-full animate-pulse"></div>
      </div>

      {/* ===== Grid Skeleton ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-300 h-72 rounded-xl animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}