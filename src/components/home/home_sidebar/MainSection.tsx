"use client";

import Link from "next/link";
import { useAuth, useClerk } from "@clerk/nextjs";
import { GoHome } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../ui/sidebar";

const items = [
    {
        id: 1,
        title: "Home",
        icon: <GoHome size={24}/>,
        href: "/",
    },
    {
        id: 2,
        title: "Shorts",
        icon: <SiYoutubeshorts size={24}/>,
        href: "/feed/shorts",
    },
    {
        id: 3,
        title: "Subscriptions",
        icon: <MdOutlineSubscriptions size={24}/>,
        href: "/feed/subscriptions",
        auth: true,
    },
];
export const MainSection = () => {
    const clerk = useClerk()
    const {isSignedIn} =  useAuth()

    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                    {items.map((item) => (
                        <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false}
                                onClick={(e) => {
                                    if (item.auth && !isSignedIn) {
                                        e.preventDefault();
                                        return clerk.openSignIn();
                                    }
                                }}
                            >
                                <Link href={item.href} className="flex items-center gap-4">
                                    <div>{item.icon}</div>
                                    <span className="text-sm ">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}