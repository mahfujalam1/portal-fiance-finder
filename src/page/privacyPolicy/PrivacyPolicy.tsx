'use client'

import { PhonePrivacy } from "@/components/PrivacyPoliccy/PhonePrivacy";
import { PhotoPrivacy } from "@/components/PrivacyPoliccy/PhotoPrivacy";
import { ProfileViewPrivacy } from "@/components/PrivacyPoliccy/ProfileViewPrivacy";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";



type PrivacyTab = 'photo' | 'phone' | 'profile_view';


export const ProfilePrivacySettings = () => {
    const [activeTab, setActiveTab] = useState<PrivacyTab>('photo');

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as PrivacyTab)}>
                <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
                    <TabsTrigger
                        value="photo"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                        Photo
                    </TabsTrigger>
                    <TabsTrigger
                        value="phone"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                        Phone
                    </TabsTrigger>
                    <TabsTrigger
                        value="profile_view"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                        Profile View
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="photo" className="mt-0">
                    <PhotoPrivacy />
                </TabsContent>

                <TabsContent value="phone" className="mt-0">
                    <PhonePrivacy />
                </TabsContent>

                <TabsContent value="profile_view" className="mt-0">
                    <ProfileViewPrivacy />
                </TabsContent>
            </Tabs>
        </div>
    );
};