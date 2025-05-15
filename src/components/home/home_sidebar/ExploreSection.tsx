import Link from "next/link";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../ui/sidebar";

import { FaRegNewspaper } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdPodcasts } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { PiCoatHangerLight } from "react-icons/pi";
import { Clapperboard, Flame, GraduationCap, Music, Radio, Trophy } from "lucide-react";

export const ExploreSection = () => {

    const items = [
        {
            id: 1,
            title: "Trending",
            icon: <Flame size={24} />,
            href: "/feed/trending"
        },
        {
            id: 2,
            title: "Shopping",
            icon: <HiOutlineShoppingBag size={24} />,
            href: "/feed/shopping"
        },
        {
            id: 3,
            title: "Music",
            icon: <Music size={24} />,
            href: "/feed/music"
        },
        {
            id: 4,
            title: "Films",
            icon: <Clapperboard size={24} />,
            href: "/feed/films"
        },
        {
            id: 5,
            title: "Live",
            icon: <Radio size={24} />,
            href: "/feed/live"
        },
        {
            id: 6,
            title: "Gaming",
            icon: <SiYoutubegaming size={24} />,
            href: "/feed/gaming"
        },
        {
            id: 7,
            title: "News",
            icon: <FaRegNewspaper size={24} />,
            href: "/feed/news"
        },
        {
            id: 8,
            title: "Sport",
            icon: <Trophy size={24} />,
            href: "/feed/sports"
        },
        {
            id: 9,
            title: "Courses",
            icon: <GraduationCap size={24} />,
            href: "/feed/courses"
        },
        {
            id: 10,
            title: "Fashion & beauty",
            icon: < PiCoatHangerLight size={24} />,
            href: "/feed/fashion-and-beauty"
        },
        {
            id: 11,
            title: "Podcasts",
            icon: <MdPodcasts size={24} />,
            href: "/feed/podcasts"
        },
    ];

    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-base">Explore</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                    {items.map((item) => (
                        <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false}
                            // onClick={() => { }}
                            >
                                <Link href={item.href} className="flex items-center gap-4">
                                    <div>{item.icon}</div>
                                    <span className="text-sm">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}