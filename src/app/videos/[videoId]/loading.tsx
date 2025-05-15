import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    const SkeletonComment = () => (
        <div className="flex gap-3">
            <Skeleton className="size-10 rounded-full flex-shrink-0" />
            <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                </div>
            </div>
        </div>
    );

    const SkeletonSuggestionRow = () => (
        <div className="flex gap-2">
            <Skeleton className="w-[168px] h-[94px] rounded-lg flex-none" />
            <div className="flex-1 min-w-0 space-y-1.5">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-3 w-1/3" />
                <Skeleton className="h-3 w-1/4" />
            </div>
        </div>
    );

    const SkeletonSuggestionGrid = () => (
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
        <div className="flex flex-row flex-wrap max-w-[1700px] mx-auto pt-2.5 px-4 mb-10">
            {/* Left Column */}
            <div className="flex flex-col gap-6 lg:w-[69%] w-full">
                {/* Video Player Skeleton */}
                <Skeleton className="aspect-video w-full rounded-xl" />

                {/* Video Top Row Skeleton */}
                <div className="flex flex-col gap-4 mt-3">
                    <Skeleton className="h-7 w-3/4" /> {/* Title */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Channel Info Skeleton */}
                        <div className="flex items-center justify-between sm:justify-start gap-3 min-w-0">
                            <div className="flex items-center gap-3 min-w-0">
                                <Skeleton className="size-10 rounded-full" />
                                <div className="flex flex-col gap-1.5 min-w-0">
                                    <Skeleton className="h-5 w-28" />
                                    <Skeleton className="h-4 w-20" />
                                </div>
                            </div>
                            <Skeleton className="h-9 w-24 rounded-2xl" /> {/* Subscribe Button */}
                        </div>
                        {/* Reactions Skeleton */}
                        <div className="flex gap-2">
                            <Skeleton className="h-9 w-28 rounded-2xl" />
                            <Skeleton className="h-9 w-20 rounded-2xl" />
                            <Skeleton className="h-9 w-10 rounded-2xl" />
                        </div>
                    </div>
                    {/* Video Description Skeleton */}
                    <div className="bg-muted/40 p-3 rounded-lg space-y-2">
                        <div className="flex gap-4">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/5" />
                    </div>
                </div>

                {/* Comment Section Skeleton */}
                <div className="mt-6 flex flex-col gap-6">
                    <Skeleton className="h-6 w-32" /> {/* Comment Count */}
                    {/* Comment Form Skeleton */}
                    <div className="flex gap-3 items-start">
                        <Skeleton className="size-10 rounded-full" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-5 w-full border-b border-input" />
                            <div className="flex justify-end gap-2">
                                <Skeleton className="h-9 w-20 rounded-2xl" />
                                <Skeleton className="h-9 w-24 rounded-2xl" />
                            </div>
                        </div>
                    </div>
                    {/* Comment List Skeleton */}
                    <div className="flex flex-col gap-6 mt-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <SkeletonComment key={`comment-${index}`} />
                        ))}
                    </div>
                </div>

                {/* Suggestions Section Skeleton (Mobile) */}
                <div className="sm:hidden block mt-2 space-y-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <SkeletonSuggestionGrid key={`mobile-sugg-${index}`} />
                    ))}
                </div>
            </div>

            {/* Right Column (Suggestions) */}
            <div className="hidden sm:block lg:w-[29%] shrink-1 ml-3 space-y-3">
                {Array.from({ length: 10 }).map((_, index) => (
                    <SkeletonSuggestionRow key={`desktop-sugg-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default Loading;