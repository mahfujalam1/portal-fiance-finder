"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ProfileData, MainTab } from "@/types/profile"
import { ProfileCard } from "./ProfileCard"

interface ProfileTabsProps {
    profiles: ProfileData[]
}

export function ProfileTabs({ profiles }: ProfileTabsProps) {
    const [mainTab, setMainTab] = useState<MainTab>("received")
    const [subTab, setSubTab] = useState<"pending" | "accepted" | "rejected">("pending")

    const getFilteredProfiles = (): ProfileData[] => {
        return profiles.filter((profile) => profile.mainTab === mainTab && profile.status === subTab)
    }

    const getStatusCounts = (tab: MainTab) => {
        const tabProfiles = profiles.filter((p) => p.mainTab === tab)
        return {
            pending: tabProfiles.filter((p) => p.status === "pending").length,
            accepted: tabProfiles.filter((p) => p.status === "accepted").length,
            rejected: tabProfiles.filter((p) => p.status === "rejected").length,
        }
    }

    const filteredProfiles = getFilteredProfiles()
    const counts = getStatusCounts(mainTab)

    const handleAccept = (id: string) => {
        console.log("Accept:", id)
        // Add your logic here
    }

    const handleReject = (id: string) => {
        console.log("Reject:", id)
        // Add your logic here
    }

    const handleBlock = (id: string) => {
        console.log("Block:", id)
        // Add your logic here
    }

    return (
        <div className="w-full space-y-6">
            <Tabs
                value={mainTab}
                onValueChange={(value) => {
                    setMainTab(value as MainTab)
                    setSubTab("pending") // Reset to pending when changing main tab
                }}
            >
                <TabsList className="w-md mx-auto justify-start bg-gray-100 gap-4 h-auto">
                    <TabsTrigger
                        value="received"
                        className="data-[state=active]:tab-trigger-active py-2 px-0 text-gray-700"
                    >
                        Received
                    </TabsTrigger>
                    <TabsTrigger
                        value="sent"
                        className="data-[state=active]:tab-trigger-active py-2 px-0 text-gray-700"
                    >
                        Sent
                    </TabsTrigger>
                    <TabsTrigger
                        value="blocked"
                        className="data-[state=active]:tab-trigger-active py-2 px-0 text-gray-700"
                    >
                        Blocked
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="flex flex-wrap gap-2 bg-box-gradient  rounded-lg">
                <button
                    onClick={() => setSubTab("pending")}
                    className={`px-4 py-2 rounded transition-colors ${subTab === "pending" ? "bg-white text-primary" : "bg-transparent text-white "
                        }`}
                >
                    Pending ({counts.pending})
                </button>
                <button
                    onClick={() => setSubTab("accepted")}
                    className={`px-4 py-2 rounded transition-colors ${subTab === "accepted" ? "bg-white text-[var(--primary)]" : "bg-transparent text-white "
                        }`}
                >
                    Accepted ({counts.accepted})
                </button>
                <button
                    onClick={() => setSubTab("rejected")}
                    className={`px-4 py-2 rounded transition-colors ${subTab === "rejected" ? "bg-white text-blue-400" : "bg-transparent text-white "
                        }`}
                >
                    Rejected ({counts.rejected})
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProfiles.length > 0 ? (
                    filteredProfiles.map((profile) => (
                        <ProfileCard
                            key={profile.id}
                            profile={profile}
                            onAccept={handleAccept}
                            onReject={handleReject}
                            onBlock={handleBlock}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        <p className="text-gray-500 text-lg">No profiles found</p>
                    </div>
                )}
            </div>
        </div>
    )
}
