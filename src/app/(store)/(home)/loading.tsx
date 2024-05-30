import { Skeleton } from "@/components/skeleton";

export default function HomeLoading() {
  return (
    <div className="grid h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="h-full col-span-6 row-span-6 rounded-lg" />

      <Skeleton className="h-full col-span-3 row-span-3 rounded-lg" />
      <Skeleton className="h-full col-span-3 row-span-3 rounded-lg" />
    </div>
  );
}
