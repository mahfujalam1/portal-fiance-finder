"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { RightSidebar } from "@/components/dashboardPage/rightSidebar/RightSidebar"

export function MobileChatBar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* Sticky Button */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-4 right-4 z-40 lg:hidden bg-[#346FB7] text-white p-4 rounded-full shadow-lg"
            >
                <MessageCircle />
            </button>

            {/* Chat Overlay */}
            {open && (
                <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-white rounded-t-xl">
                        <div className="flex justify-between items-center p-3 border-b">
                            <span className="font-semibold">Live Chat</span>
                            <button onClick={() => setOpen(false)}>
                                <X />
                            </button>
                        </div>

                        <RightSidebar />
                    </div>
                </div>
            )}
        </>
    )
}
