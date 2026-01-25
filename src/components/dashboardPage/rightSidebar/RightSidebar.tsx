"use client"

import { useState } from "react"
import { ChevronDown, MessageCircleMore } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChatWindow } from "@/components/profile/ChatWindow"

interface Chat {
    id: string
    name: string
    avatar: string
    message: string
    unread: number
}

const CHATS: Chat[] = [
    {
        id: "1",
        name: "Soniya Mahfuz",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soniya",
        message: "has messaged you",
        unread: 3,
    },
    {
        id: "2",
        name: "Rakib Ahmed",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soniya2",
        message: "has messaged you",
        unread: 3,
    },
    {
        id: "3",
        name: "Nadia Islam",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soniya3",
        message: "has messaged you",
        unread: 3,
    },
    {
        id: "4",
        name: "Karim Hassan",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soniya4",
        message: "has messaged you",
        unread: 3,
    },
    {
        id: "5",
        name: "Fatima Khan",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soniya5",
        message: "has messaged you",
        unread: 3,
    },
    {
        id: "6",
        name: "Tanvir Rahman",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soniya6",
        message: "has messaged you",
        unread: 3,
    },
    {
        id: "7",
        name: "Anika Hossain",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soniya7",
        message: "has messaged you",
        unread: 3,
    },
    {
        id: "8",
        name: "Sabbir Khan",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soniya8",
        message: "has messaged you",
        unread: 3,
    },
    {
        id: "9",
        name: "Mehjabin Akter",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soniya9",
        message: "has messaged you",
        unread: 3,
    },
]

interface RightSidebarProps {
    onChatSelect?: (chat: Chat) => void
    isOpen?: boolean
}

export function RightSidebar({
    onChatSelect,
    isOpen = true,
}: RightSidebarProps) {
    const [isExpanded, setIsExpanded] = useState(isOpen)
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null)

    return (
        <div className="flex flex-col top-20 sticky">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b sticky top-0 z-10 bg-blue-200">
                <div className="flex items-center gap-2">
                    <span className="text-primary font-bold"><MessageCircleMore /></span>
                    <span className="bg-linear-to-r text-xl to-[#49cce9] from-[#346FB7]
    bg-clip-text text-transparent font-semibold">LIVE CHAT</span>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 hover:bg-[#7bbdff] hover:text-white"
                >
                    <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? "" : "rotate-180"
                            }`}
                    />
                </Button>
            </div>

            {/* Chat List */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "flex-1" : "max-h-0"
                    }`}
            >
                <div className="h-full overflow-y-auto blue-scrollbar bg-white">
                    {CHATS.map((chat) => (
                        <button
                            key={chat.id}
                            onClick={() => setSelectedChat?.(chat)}
                            className="w-full flex items-center gap-3 p-4 border-b hover:bg-blue-50 text-left transition-colors cursor-pointer"
                        >
                            <Avatar className="w-12 h-12">
                                <AvatarImage src={chat.avatar} />
                                <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                            </Avatar>

                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm text-gray-800">
                                    {chat.name}
                                </p>
                                <p className="text-xs text-gray-600 truncate">
                                    {chat.message}
                                </p>
                            </div>

                            <Badge className="bg-[#61a8ff] text-white text-xs">
                                {chat.unread}
                            </Badge>
                        </button>
                    ))}
                </div>
            </div>
            {selectedChat && (
                <ChatWindow
                    chat={selectedChat}
                    onClose={() => setSelectedChat(null)}
                />
            )}
        </div>
    )
}