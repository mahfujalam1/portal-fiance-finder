import { LeftSidebar } from "@/components/dashboardPage/leftSidebar/LeftSidebar"
import { RightSidebar } from "@/components/dashboardPage/rightSidebar/RightSidebar"
import { MobileChatBar } from "@/components/chat/MobileChatBar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="lg:px-10">

            <div className="flex">

                {/* Left Sidebar - Desktop only */}
                <aside className="hidden lg:block w-[20%] pt-20">
                    <LeftSidebar />
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto no-scrollbar px-2 lg:px-6">
                    {children}
                </main>

                {/* Right Sidebar - Tablet + Desktop */}
                <aside className="hidden lg:block w-[20%] pt-20 h-[calc(100vh-70px)]">
                    <RightSidebar />
                </aside>
            </div>

            {/* Mobile Chat */}
            <MobileChatBar />
        </div>
    )
}
