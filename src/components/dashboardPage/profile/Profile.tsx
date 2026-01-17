'use client';

import { ProfileCard } from "@/components/profile/ProfileCard";
import { profiles } from "@/constant/profilesData";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";

export default function Profile() {
    const searchParams = useSearchParams();
    console.log('')

    // URL থেকে সব filters নিন
    const filters = {
        recentlyJoined: searchParams.get('recentlyJoined') || 'all',
        activeMembers: searchParams.get('activeMembers') || 'all',
        maritalStatus: searchParams.get('maritalStatus') || 'all',
        activeMembersBottom: searchParams.get('activeMembersBottom') || 'all'
    };

    // Filtered profiles
    const filteredProfiles = useMemo(() => {
        let result = [...profiles];

        // Marital Status filter
        if (filters.maritalStatus !== 'all') {
            result = result.filter(profile =>
                profile.maritalStatus?.toLowerCase() === filters.maritalStatus.toLowerCase()
            );
        }

        // Recently Joined filter
        if (filters.recentlyJoined !== 'all') {
            const now = new Date();
            const timeLimit = filters.recentlyJoined === 'week' ? 7 : 30; // days

            result = result.filter(profile => {
                const joinedDate = new Date(profile.id);
                const diffTime = Math.abs(now.getTime() - joinedDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays <= timeLimit;
            });
        }

        // Active Members filter (top)
        if (filters.activeMembers !== 'all') {
            const now = new Date();
            const timeLimit = filters.activeMembers === 'week' ? 7 : 30;

            result = result.filter(profile => {
                const lastActive = new Date(profile.status);
                const diffTime = Math.abs(now.getTime() - lastActive.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays <= timeLimit;
            });
        }

        // আপনার প্রয়োজন অনুযায়ী আরো filters add করুন

        return result;
    }, [filters]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="space-y-4">
                {/* Filter info দেখান */}
                <div className="bg-blue-50 p-4 rounded-lg">
                    <p className=" text-gray-600 text-xl font-bold bg-linear-to-r text-xl to-[#49cce9] from-[#346FB7]
    bg-clip-text text-transparent text-center">
                        Search Result: {filteredProfiles.length}
                        {filters.maritalStatus !== 'all' && ` • ${filters.maritalStatus}`}
                        {filters.recentlyJoined !== 'all' && ` • Joined ${filters.recentlyJoined}`}
                    </p>
                </div>

                {/* Profiles display */}
                {filteredProfiles.length > 0 ? (
                    filteredProfiles.slice(0, 7).map((profile) => (
                        <ProfileCard key={profile.id} profile={profile} />
                    ))
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-500">No profiles found with selected filters</p>
                    </div>
                )}
            </div>
        </Suspense>
    );
}