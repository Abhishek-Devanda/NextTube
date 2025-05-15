"use client";

import { useState } from "react"
import { Badge } from "../ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { cn } from "@/lib/utils";

export const CategoriesSection = () => {
    const [activeCategory, setActiveCategory] = useState("All")
const categories = [
    { id: "10", category: "Music" },
    { id: "20", category: "Gaming" },
    { id: "24", category: "Entertainment" },
    { id: "25", category: "News & Politics" },
    { id: "17", category: "Sports" },
    { id: "27", category: "Education" },
    { id: "28", category: "Science & Technology" },
    { id: "26", category: "Howto & Style" },
    { id: "1", category: "Film & Animation" },
    { id: "2", category: "Autos & Vehicles" },
    { id: "19", category: "Travel & Events" },
    { id: "22", category: "People & Blogs" },
    { id: "23", category: "Comedy" },
    { id: "15", category: "Pets & Animals" }
];

    return (
        <div className="relative w-full ">
            <Carousel
                opts={{ align: "start", dragFree: true }}
                className="w-full px-12">

                {/* fade */}
                <div className={cn(
                    "absolute left-8 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none")
                }
                />
                <CarouselContent className="-ml-3">

                    <CarouselItem className="pl-3 basis-auto">
                        <Badge
                            onClick={() => setActiveCategory("All")}
                            variant={activeCategory === "All" ? "default" : "secondary"}
                            className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm">
                            All
                        </Badge>
                    </CarouselItem>

                    {categories.map((item) => (
                        <CarouselItem key={item.id} className="pl-3 basis-auto">
                            <Badge
                                onClick={() => setActiveCategory(item.id)}
                                variant={activeCategory === item.id ? "default" : "secondary"}
                                className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm">
                                {item.category}
                            </Badge>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="left-0 z-20" />
                <CarouselNext className="right-0 z-20" />

                {/* fade */}

                <div className={
                    cn("absolute right-12  top-0 bottom-0 w-12 z-10 bg-gradient-to-l  from-background to-transparent pointer-events-none")
                }
                />

            </Carousel>
        </div>
    )
}
