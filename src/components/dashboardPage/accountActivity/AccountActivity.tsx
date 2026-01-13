"use client"

import type React from "react"

import { Lock } from "lucide-react"
import { ActivityCard } from "./ActivityCard"

interface ActivityData {
    number?: string | number
    label: string
    icon?: React.ReactNode
}

const activityData: ActivityData[] = [
    { number: "1", label: "Pending Invitations" },
    { number: "6", label: "Accepted Invitations" },
    { number: "69", label: "Recent Visitors" },
    { icon: <Lock size={32} />, label: "Premium Members Only" },
    { icon: <Lock size={32} />, label: "Contact Viewed" },
    { icon: <Lock size={32} />, label: "Who Viewed Your Profile" },
]

export function AccountActivity() {
    return (
        <div className="w-full bg-gradient-to-b from-[#E6EBF6] via-[#B1CCED] to-[#f3f7ff] rounded-lg p-8">
            <h2 className="text-center text-2xl font-semibold text-[#346FB7] mb-8">Account Activity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activityData.map((item, index) => (
                    <ActivityCard key={index} number={item.number} label={item.label} icon={item.icon} />
                ))}
            </div>
        </div>
    )
}
