import { Skeleton } from "@/components/skeleton";

export default function HomeLoading() {
  return (
    <div className="grid min-h-[860px] grid-cols-3 md:grid-cols-6 lg:grid-cols-9 grid-rows-[unset] md:grid-rows-6 gap-6">
      <Skeleton className="col-span-3 lg:col-span-6 row-span-[unset] md:row-span-6 rounded-lg aspect-square md:aspect-[unset]" />
      <Skeleton className="h-full col-span-3 row-span-[unset] md:row-span-3 rounded-lg aspect-square md:aspect-[unset]" />
      <Skeleton className="h-full col-span-3 row-span-[unset] md:row-span-3 rounded-lg aspect-square md:aspect-[unset]" />
    </div>
  );
}
