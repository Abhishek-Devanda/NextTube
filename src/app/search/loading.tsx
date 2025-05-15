import { Skeleton } from "@/components/ui/skeleton";

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

    const SkeletonRowCard = () => (
        <div className="flex gap-4">
            <Skeleton className="w-[38%] aspect-video rounded-lg flex-none" />
            <div className="flex-1 min-w-0 flex flex-col gap-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex items-center gap-2 mt-2">
                    <Skeleton className="size-6 rounded-full" />
                    <Skeleton className="h-4 w-1/4" />
                </div>
                <Skeleton className="h-3 w-full mt-1" />
            </div>
        </div>
    );

    return (
        <div className="max-w-[1300px] mx-auto mb-10 flex flex-col gap-y-6 px-4 pt-2.5">
            {/* Grid layout for mobile (visible by default, hidden on md and up) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
                {Array.from({ length: 12 }).map((_, index) => (
                    <SkeletonGridCard key={`grid-${index}`} />
                ))}
            </div>
            {/* Row layout for desktop (hidden by default, visible as flex on md and up) */}
            <div className="hidden md:flex flex-col gap-y-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <SkeletonRowCard key={`row-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default Loading;
