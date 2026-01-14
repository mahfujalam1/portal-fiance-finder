import { RefineFilters } from "@/types/refineFilter";
import { useState } from "react";
import { RadioSection } from "../ui/RadioSection";
import { MARITAL_STATUS_OPTIONS, TIME_OPTIONS } from "@/constant/refineQueryFilter";

const RefineSearchSidebar = () => {
    const [filters, setFilters] = useState<RefineFilters>({
        recentlyJoined: 'all',
        activeMembers: 'all',
        maritalStatus: 'all',
        activeMembersBottom: 'all'
    });

    const handleFilterChange = (key: keyof RefineFilters, value: string) => {
        setFilters(prev => {
            const updated = { ...prev, [key]: value };
            return updated;
        });
    };

    return (
        <div className="w-full max-w-sm bg-gray-100 rounded-t-md shadow-lg">
            {/* Custom styles for radio button selection */}
            <style>{`
        [data-state="checked"] {
          background-color: #346FB7 !important;
          border-color: #346FB7 !important;
        }
        [data-state="checked"]::before {
          background-color: white !important;
        }
      `}</style>

            {/* Header */}
            <div className="bg-white rounded-t-md px-6 py-5 border-b border-gray-200">
                <h2 className="text-2xl font-bold bg-linear-to-r text-xl to-[#49cce9] from-[#346FB7]
    bg-clip-text text-transparent text-center">
                    Refine Search
                </h2>
            </div>

            {/* Filters */}
            <div className="space-y-0">
                {/* Recently Joined */}
                <RadioSection
                    title="Recently Joined"
                    options={TIME_OPTIONS}
                    selectedValue={filters.recentlyJoined}
                    onValueChange={(value) => handleFilterChange('recentlyJoined', value)}
                    name="recently-joined"
                />

                {/* Active Members (Top) */}
                <RadioSection
                    title="Active Members"
                    options={TIME_OPTIONS}
                    selectedValue={filters.activeMembers}
                    onValueChange={(value) => handleFilterChange('activeMembers', value)}
                    name="active-members-top"
                />

                {/* Marital Status */}
                <RadioSection
                    title="Marital Status"
                    options={MARITAL_STATUS_OPTIONS}
                    selectedValue={filters.maritalStatus}
                    onValueChange={(value) => handleFilterChange('maritalStatus', value)}
                    name="marital-status"
                />

                {/* Active Members (Bottom) */}
                <RadioSection
                    title="Active Members"
                    options={TIME_OPTIONS}
                    selectedValue={filters.activeMembersBottom}
                    onValueChange={(value) => handleFilterChange('activeMembersBottom', value)}
                    name="active-members-bottom"
                />
            </div>
        </div>
    );
};

export default RefineSearchSidebar;