"use client"

import { Bell } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { IMAGES } from "@/constant/image.index"

interface Notification {
    id: string
    user: string
    profile: string
    action: string
    time: string
    avatar?: string
}

const mockNotifications: Notification[] = [
    {
        id: "1",
        user: "Soniya M",
        profile: IMAGES.profile2.src,
        action: "verified their mobile number",
        time: "a few hours ago",
    },
    {
        id: "2",
        user: "Soniya M",
        profile: IMAGES.profile2.src,
        action: "added a new photo",
        time: "a few hours ago",
    },
    {
        id: "3",
        user: "Fahmida K",
        profile: IMAGES.profile2.src,
        action: "verified their mobile number",
        time: "1 day ago",
    },
    {
        id: "4",
        user: "Sruti M",
        profile: IMAGES.profile2.src,
        action: "added a new photo",
        time: "3 days ago",
    },
    {
        id: "5",
        user: "Priya S",
        profile: IMAGES.profile2.src,
        action: "followed you",
        time: "5 days ago",
    },
    {
        id: "6",
        user: "Isha P",
        profile: IMAGES.profile2.src,
        action: "added a new photo",
        time: "1 week ago",
    },
]

export function NotificationDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <Bell className="w-5 h-5 text-primary" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-96 mt-5">
                <div className="border-b px-4 py-3">
                    <h2 className="font-semibold text-primary text-sm">
                        Notifications
                    </h2>
                </div>

                <ScrollArea className="h-96">
                    <div className="divide-y">
                        {mockNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <div className="flex gap-3">
                                    <Avatar className="w-10 h-10 flex-shrink-0">
                                        <AvatarImage
                                            src={notification?.profile}
                                            alt={notification.user}
                                            className=""
                                        />
                                    </Avatar>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm">
                                            <span className="font-semibold text-primary">
                                                {notification.user}
                                            </span>
                                            {" "}
                                            <span className="text-gray-600">
                                                {notification.action}
                                            </span>
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {notification.time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                <div className="border-t px-4 py-2 text-center">
                    <button className="text-xs font-medium text-primary hover:underline">
                        View all notifications
                    </button>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
