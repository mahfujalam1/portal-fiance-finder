'use client'
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { UserX } from 'lucide-react';
import { MarriageFixedForm } from './deleteAccount/MarriageFixedForm';
import { OtherReasonsForm } from './deleteAccount/OtherReasonsForm';

// Types
interface MarriageFixedFormData {
    source: 'fiance_finder' | 'other';
    accountId?: string;
    photo?: File;
    sourceName?: string;
    successStory?: string;
}

type DeleteAccountTab = 'marriage_fixed' | 'other_reasons';

interface OtherReasonsFormData {
    reason: 'too_many_calls' | 'not_enough_matches' | 'wish_not_to_specify';
}


export const DeleteAccount = () => {
    const [activeTab, setActiveTab] = useState<DeleteAccountTab>('marriage_fixed');

    const handleMarriageFixedSubmit = (data: MarriageFixedFormData) => {
        console.log('Marriage Fixed Data:', data);
        toast.success('Account deletion request submitted successfully!');
        // Handle API call here
    };

    const handleOtherReasonsSubmit = (data: OtherReasonsFormData) => {
        console.log('Other Reasons Data:', data);
        toast.success('Account deletion request submitted successfully!');
        // Handle API call here
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <UserX className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Delete Account</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            </p>

            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as DeleteAccountTab)}>
                <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
                    <TabsTrigger
                        value="marriage_fixed"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                        MARRIAGE FIXED
                    </TabsTrigger>
                    <TabsTrigger
                        value="other_reasons"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                        OTHER REASONS
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="marriage_fixed" className="mt-0">
                    <MarriageFixedForm onSubmit={handleMarriageFixedSubmit} />
                </TabsContent>

                <TabsContent value="other_reasons" className="mt-0">
                    <OtherReasonsForm onSubmit={handleOtherReasonsSubmit} />
                </TabsContent>
            </Tabs>
        </div>
    );
};