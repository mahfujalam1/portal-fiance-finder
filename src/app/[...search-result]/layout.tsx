'use client'
import { RightSidebar } from "@/components/dashboardPage/rightSidebar/RightSidebar"
import { MobileChatBar } from "@/components/chat/MobileChatBar"
import RefineSearchSidebar from "@/components/searchResult/RefineSearchSidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="lg:px-10">
            <div className="flex h-screen">
                {/* Left Sidebar - Desktop only */}
                <aside className="hidden lg:block w-[20%] pt-20">
                    <RefineSearchSidebar />
                </aside>
                {/* Main Content */}
                <main className="flex-1 overflow-y-auto no-scrollbar px-2 lg:px-6">
                    {children}
                </main>
                {/* Right Sidebar - Tablet + Desktop */}
                <aside className="hidden lg:block w-[20%] pt-20">
                    <RightSidebar />
                </aside>
            </div>

            {/* Mobile Chat */}
            <MobileChatBar />
        </div>
    )
}
