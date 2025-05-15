import { Skeleton } from "@/components/ui/skeleton";

const PlaylistLoadingSkeleton = () => {
    return (
        <div className="flex flex-col gap-2 p-2">
            <Skeleton className="relative w-full aspect-video rounded-lg" />
            <div className="flex-1 min-w-0 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
                <Skeleton className="h-3 w-1/4" />
            </div>
        </div>
    );
};

const Loading = () => {
    return (
        <div className="container mx-auto p-4">
            <Skeleton className="h-14 w-1/5 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <PlaylistLoadingSkeleton key={index} />
                ))}
            </div>
        </div>
    );
};

export default Loading;
