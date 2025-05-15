"use client";

import Link from "next/link";
import { useAuth, useClerk } from "@clerk/nextjs";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../ui/sidebar";
import { Clock, History, ListVideo, SquarePlay, SquareUserRound, ThumbsUpIcon } from "lucide-react";


const items = [
    {
        id: 1,
        title: "Your Channel",
        icon: <SquareUserRound size={24} />,
        href: "/channel/mine",
    },
    {
        id: 2,
        title: "History",
        icon: <History size={24} />,
        href: "/playlists/WH",
    },
    {
        id: 3,
        title: "Playlists",
        icon: <ListVideo size={24} />,
        href: "/playlists",
    },
    {
        id: 4,
        title: "Your Videos",
        icon: <SquarePlay size={24} />,
        href: `/playlists/UP`,
    },
    {
        id: 5,
        title: "Watch later",
        icon: <Clock size={24} />,
        href: "/playlists/WL",
    },
    {
        id: 6,
        title: "Liked videos",
        icon: <ThumbsUpIcon size={24} />,
        href: "/playlists/LL",
    },
];
export const YouSection = () => {
    const clerk = useClerk()
    const { isSignedIn } = useAuth()

    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-base">You</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                    {items.map((item) => (
                        <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false}
                                onClick={(e) => {
                                    if (!isSignedIn) {
                                        e.preventDefault();
                                        return clerk.openSignIn();
                                    }
                                }}
                            >
                                <Link href={item.href} className="flex items-center gap-5">
                                    <div> {item.icon}</div>
                                    <span className="text-sm">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}