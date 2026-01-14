"use client"

import { Menu, User } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

export function Navbar() {
    const router = useRouter()
    const pathname = usePathname()

    const isHome = pathname === "/"

    return (
        <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-gradient px-6">
            <div
                className={clsx(
                    "h-full flex items-center justify-between",
                    isHome ? "w-full" : "max-w-7xl mx-auto"
                )}
            >
                {/* Logo */}
                <div
                    onClick={() => router.push("/")}
                    className="text-xl font-bold bg-linear-to-r to-[#49cce9] from-[#346FB7] bg-clip-text text-transparent cursor-pointer"
                >
                    {process.env.NEXT_PUBLIC_PROJECT_NAME}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    <Button variant="ghost" onClick={() => router.push("/")}>Dashboard</Button>
                    <Button variant="ghost" onClick={() => router.push("/connections")}>Connections</Button>
                    <Button variant="ghost" onClick={() => router.push("/search")} >Search</Button>
                    <Button variant="ghost" onClick={() => router.push("/profile")}>
                        <User />
                    </Button>
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="w-[260px]">
                            <div className="flex flex-col gap-4 mt-6">
                                <Button variant="ghost" onClick={() => router.push("/")}>
                                    Dashboard
                                </Button>
                                <Button variant="ghost" onClick={() => router.push("/connections")}>
                                    Connections
                                </Button>
                                <Button variant="ghost" onClick={() => router.push("/search") }>
                                    Search
                                </Button>

                                <div className="border-t pt-4">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                        onClick={() => router.push("/profile")}
                                    >
                                        <User className="mr-2" /> Profile
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
