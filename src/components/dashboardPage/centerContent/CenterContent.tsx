"use client"

import { SectionHeader } from "@/components/reusalbe/SectionHeader"
import { AccountActivity } from "../accountActivity/AccountActivity"
import { HeroBanner } from "../heroBanner/HeroBanner"
import { ProfessionalDetailsCard } from "../professionCard/ProfessionCard"
import { ProfilePhotoCard } from "../profilePhoto/ProfilePhoto"
import { VerifyIdCard } from "../verifyCard/VerifyCard"
import Profile from "@/app/[...search-result]/page"

export const MainContent = () => {
    return (
        <div className="flex-1 overflow-y-auto space-y-10">
            {/* Awaiting Response Section */}
            <HeroBanner />

            {/* Account Activity Section */}
            <AccountActivity />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  mx-auto">
                <ProfessionalDetailsCard />
                <ProfilePhotoCard />
                <VerifyIdCard />
            </div>

            <SectionHeader title="Today's Match" />
            <Profile/>
        </div>
    )
}
