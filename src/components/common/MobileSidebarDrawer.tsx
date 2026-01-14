"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LeftSidebar } from "@/components/dashboardPage/leftSidebar/LeftSidebar";
import { RightSidebar } from "@/components/dashboardPage/rightSidebar/RightSidebar";

export function MobileSidebarDrawer() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            {/* 3 line icon */}
            <SheetTrigger asChild>
                <button className="p-2 rounded-md hover:bg-muted">
                    <Menu className="h-6 w-6" />
                </button>
            </SheetTrigger>

            {/* Drawer Content */}
            <SheetContent side="left" className="w-[280px] p-0">
                <div className="h-full overflow-y-auto">
                    <LeftSidebar />

                    <div className="border-t my-4" />

                    <RightSidebar />
                </div>
            </SheetContent>
        </Sheet>
    );
}
