'use client'

import { EmailNotifications } from "@/components/privacySettings/EmailNotifications";
import { SMSNotifications } from "@/components/privacySettings/SMSNotifications";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";



type NotificationType = 'email' | 'sms';


export const PrivacySettings = () => {
    const [activeTab, setActiveTab] = useState<NotificationType>('email');

    return (
        <div className="space-y-6">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as NotificationType)}>
                <TabsList className="grid w-full max-w-xs grid-cols-2">
                    <TabsTrigger
                        value="email"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                        Email
                    </TabsTrigger>
                    <TabsTrigger
                        value="sms"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                        SMS
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="email" className="mt-6">
                    <EmailNotifications />
                </TabsContent>

                <TabsContent value="sms" className="mt-6">
                    <SMSNotifications />
                </TabsContent>
            </Tabs>
        </div>
    );
};