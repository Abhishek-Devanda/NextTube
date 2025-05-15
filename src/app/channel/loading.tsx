import { Skeleton } from "@/components/ui/skeleton";

const ChannelLoading = () => (
    <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-6 pt-8 md:pt-12 flex flex-row items-start gap-6">
            {/* Avatar Skeleton */}
            <Skeleton className="w-32 h-32 rounded-full border-4 border-black shadow-lg bg-gray-700 flex-shrink-0" />
            {/* Content Skeleton */}
            <div className="flex-1 text-left">
                <div className="flex flex-row items-center gap-2 justify-start">
                    <Skeleton className="h-8 w-48 bg-gray-700 rounded" />
                </div>
                <div className="flex flex-wrap items-center justify-start gap-3 mt-3">
                    <Skeleton className="h-6 w-32 bg-gray-700 rounded" />
                    <Skeleton className="h-6 w-24 bg-gray-700 rounded" />
                    <Skeleton className="h-6 w-20 bg-gray-700 rounded" />
                </div>
                <div className="mt-4 space-y-2 max-w-xl">
                    <Skeleton className="h-4 w-full bg-gray-700 rounded" />
                    <Skeleton className="h-4 w-5/6 bg-gray-700 rounded" />
                    <Skeleton className="h-4 w-2/3 bg-gray-700 rounded" />
                </div>
            </div>
        </div>
    </div>
);

export default ChannelLoading;