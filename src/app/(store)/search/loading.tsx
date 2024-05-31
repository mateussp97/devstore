import { Skeleton } from "@/components/skeleton";

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">Carregando Resultados</p>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <Skeleton
              key={index}
              className="aspect-square relative rounded-lg"
            />
          );
        })}
      </div>
    </div>
  );
}
