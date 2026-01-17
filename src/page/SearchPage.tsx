'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MatrimonyIdSearch } from '@/components/search/MatrimonyIdSearch';
import { BasicFilters } from '@/components/search/BasicFilters';
import { ExtendedFilters } from '@/components/search/ExtendedFilters';
import { ProfileFilters } from '@/components/search/ProfileFilters';
import { useRouter } from 'next/navigation';

const SearchPage = () => {
    const [matrimonyId, setMatrimonyId] = useState('');
    const [showMoreOptions, setShowMoreOptions] = useState(true);
    const router = useRouter()
    const [filters, setFilters] = useState<SearchFilters>({
        gender: '',
        religion: '',
        age: '',
        maritalStatus: '',
        city: '',
        country: '',
        birthPlace: '',
        height: '',
        monthlyIncome: '',
        bloodGroup: '',
        profession: '',
        education: '',
        hideAddedProfiles: false,
        hideBlockedProfiles: false,
    });

    const handleMatrimonyIdSearch = () => {
        if (matrimonyId.trim()) {
            console.log('Matrimony ID Search:', matrimonyId);
            router.push(`/search-result?${matrimonyId}`);
        }
    };

    const handleBasicSearch = () => {
        console.log('Search Filters Data:', filters);

        const queryParams = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => {
            if (value && value !== '' && value !== false) {
                queryParams.append(key, value.toString());
            }
        });

        console.log('Query Parameters:', queryParams.toString());
        router.push(`/search-results?${queryParams.toString()}`);
    };

    const handleFilterChange = (key: keyof SearchFilters, value: string) => {
        setFilters(prev => {
            const updated = { ...prev, [key]: value };
            console.log('Filter Updated:', { key, value, allFilters: updated });
            return updated;
        });
    };

    const handleToggleAdded = (checked: boolean) => {
        setFilters(prev => {
            const updated = { ...prev, hideAddedProfiles: checked };
            console.log('Hide Added Profiles:', checked, 'All Filters:', updated);
            return updated;
        });
    };

    const handleToggleBlocked = (checked: boolean) => {
        setFilters(prev => {
            const updated = { ...prev, hideBlockedProfiles: checked };
            console.log('Hide Blocked Profiles:', checked, 'All Filters:', updated);
            return updated;
        });
    };

    return (
        <div className="min-h-screen  px-6">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold bg-linear-to-r text-xl to-[#49cce9] from-[#346FB7] bg-clip-text text-transparent text-center">
                        Find Your Desired Profiles Here
                    </p>
                </div>

                {/* Matrimony ID Search */}
                <MatrimonyIdSearch
                    matrimonyId={matrimonyId}
                    setMatrimonyId={setMatrimonyId}
                    onSearch={handleMatrimonyIdSearch}
                />

                {/* Basic Search Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-xl font-bold text-primary mb-8">
                        Basic Search
                    </h2>

                    {/* Basic Filters */}
                    <BasicFilters
                        filters={filters}
                        onFilterChange={handleFilterChange}
                        showMoreOptions={showMoreOptions}
                        setShowMoreOptions={setShowMoreOptions}
                    />

                    {/* Extended Filters */}
                    {showMoreOptions && (
                        <ExtendedFilters
                            filters={filters}
                            onFilterChange={handleFilterChange}
                        />
                    )}

                    {/* Profile Checkboxes */}
                    <ProfileFilters
                        hideAddedProfiles={filters.hideAddedProfiles}
                        hideBlockedProfiles={filters.hideBlockedProfiles}
                        onToggleAdded={handleToggleAdded}
                        onToggleBlocked={handleToggleBlocked}
                    />

                    {/* Search Button */}
                    <div className="mt-8 flex justify-end">
                        <Button
                            onClick={handleBasicSearch}
                            variant={'default'}
                            className=""
                        >
                            <Search className="w-5 h-5" />
                            SEARCH
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;