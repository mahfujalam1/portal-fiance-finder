"use client"

import { Bell, User, MessageCircle } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "../ui/button"

export function Navbar() {
    const router = useRouter()
    const pathname = usePathname()

    // Hide navbar on profile and messages pages
    if (pathname === "/profile" || pathname === "/messages") {
        return null
    }

    return (
        <nav
            className="text-white shadow-md fixed w-full  z-20 h-16 flex items-center justify-between px-6 bg-gradient"
        >
            <div className="text-2xl font-bold
    bg-linear-to-r to-[#49cce9] from-[#346FB7]
    bg-clip-text text-transparent
    transition-all duration-300">
                {process.env.NEXT_PUBLIC_PROJECT_NAME}
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex gap-8 items-center text-black">
                <Button onClick={()=>router.push('/')} variant="ghost" className=" hover:bg-[#346FB7]">
                    Dashboard
                </Button>
                <Button onClick={() => router.push('/connections')} variant="ghost" className=" hover:bg-[#346FB7]">
                    Connections
                </Button>
                <Button variant="ghost" className=" hover:bg-[#346FB7]">
                    Search
                </Button>
            </div>

            <div className="flex gap-4 items-center">
                <Button variant="ghost" size="icon" className="text-black hover:bg-[#346FB7]">
                    <Bell className="w-5 h-5" />
                </Button>

                {/* Mobile: Chat Icon - Visible only on mobile */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-black hover:bg-[#346FB7]"
                    onClick={() => router.push("/messages")}
                >
                    <MessageCircle className="w-5 h-5" />
                </Button>

                {/* Profile Icon - Opens profile page on mobile, modal on desktop */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-black hover:bg-[#346FB7]"
                    onClick={() => router.push("/profile")}
                >
                    <User className="w-5 h-5" />
                </Button>
            </div>
        </nav>
    )
}
