"use client";

import { Compass, Instagram, Layout, Mail, Trophy } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search"
    },
    {
        icon: Trophy,
        label: "Leaderboard",
        href: "/points"
    },
    {
        icon: Instagram,
        label: "Instagram",
        href: "/community"
    },
    {
        icon: Mail,
        label: "Newsletter",
        href: "/letter"
    },
]

export const SidebarRoutes = () => {
    const routes = guestRoutes;
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) =>(
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}