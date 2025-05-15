import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const Loading = () => {
    const SkeletonGridCard = () => (
        <div className="flex flex-col gap-2">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <div className="flex gap-3 pt-1">
                <Skeleton className="size-8 rounded-full flex-shrink-0" />
                <div className="flex-1 min-w-0 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                    <Skeleton className="h-3 w-1/3" />
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
            {/* Skeleton for CategoriesSection */}
            <div className="relative w-full overflow-hidden">
                <div className={cn(
                    "absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none")
                }
                />
                <div className="flex gap-2 px-12 pb-2"> 
                    {Array.from({ length: 15 }).map((_, index) => (
                        <Skeleton key={`cat-${index}`} className="h-8 w-24 rounded-lg flex-none" />
                    ))}
                </div>
                <div className={
                    cn("absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none")
                }
                />
                <Skeleton className="absolute left-0 top-1/2 -translate-y-1/2 size-8 rounded-full z-20" />
                <Skeleton className="absolute right-0 top-1/2 -translate-y-1/2 size-8 rounded-full z-20" />
            </div>

            {/* Skeleton for Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, index) => (
                    <SkeletonGridCard key={`video-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default Loading;
