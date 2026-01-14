'use client';

import { MobileChatBar } from "@/components/chat/MobileChatBar";
import { RightSidebar } from "@/components/dashboardPage/rightSidebar/RightSidebar";
import RefineSearchSidebar from "@/components/searchResult/RefineSearchSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="lg:px-10">
            <div className="mt-20 flex h-screen">
                <aside className="hidden lg:block w-[20%] rounded-lg">
                    <RefineSearchSidebar />
                </aside>

                <main className="flex-1 overflow-y-auto no-scrollbar px-2 lg:px-6">
                    {children}
                </main>

                <aside className="hidden lg:block w-[20%]">
                    <RightSidebar />
                </aside>
            </div>

            <MobileChatBar />
        </div>
    );
}