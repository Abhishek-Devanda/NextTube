"use client";


import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../ui/sidebar";
import Link from "next/link";

export const MoreSection = () => {
    const items = [
        {
            id: 1,
            title: "Youtube Premium",
            icon: <FaYoutube fill="red" size={24}/>,
            href: "https://www.youtube.com/premium"
        },
        {
            id: 2,
            title: "Youtube Studio",
            icon: <SiYoutubestudio fill="red" size={24}/>,
            href: "https://studio.youtube.com/"
        },
        {
            id: 3,
            title: "Youtube Music",
            icon: <SiYoutubemusic fill="red" size={24}/>,
            href: "https://music.youtube.com/"
        },
        {
            id: 4,
            title: "Youtube Kids",
            icon: <SiYoutubekids fill="red" size={24}/>,
            href: "https://www.youtubekids.com/"
        },
    ];

    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-base">More from YouTube</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                    {items.map((item) => (
                        <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false}
                                onClick={() => { }}
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