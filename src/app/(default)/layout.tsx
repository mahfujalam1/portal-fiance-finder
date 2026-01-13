import { LeftSidebar } from "@/components/dashboardPage/leftSidebar/LeftSidebar";
import { RightSidebar } from "@/components/dashboardPage/rightSidebar/RightSidebar";

function layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className=" overflow-hidden px-10">
            <div className="mt-20 flex h-[calc(100vh-80px)]">
                {/* Left Sidebar */}
                <aside className="sticky top-0 h-screen w-[20%] flex-shrink-0">
                    <LeftSidebar />
                </aside>

                {/* Main Content (Scrollable) */}
                <main className="flex-1 overflow-y-auto w-full no-scrollbar px-10">
                    {children}
                </main>

                {/* Right Sidebar */}
                <aside className="sticky top-0 h-screen w-[20%] flex-shrink-0 no-scrollbar">
                    <RightSidebar />
                </aside>
            </div>
        </div>
    );
}

export default layout;
