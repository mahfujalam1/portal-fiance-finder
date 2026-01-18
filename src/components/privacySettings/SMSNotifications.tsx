'use client'

import { useState } from "react";
import { toast } from "sonner";
import { NotificationSettingsCard } from "./NotificationSettingsCard";
import { CheckboxItem } from "../ui/CheckboxItem";


interface SMSActivitySettings {
    shortlist: boolean;
    profileView: boolean;
}

interface SMSMatchSettings {
    photoMatches: boolean;
}


export const SMSNotifications = () => {
    const [activitySettings, setActivitySettings] = useState<SMSActivitySettings>({
        shortlist: true,
        profileView: true,
    });

    const [matchSettings, setMatchSettings] = useState<SMSMatchSettings>({
        photoMatches: true,
    });

    const handleActivitySave = () => {
        console.log('SMS Activity Settings:', activitySettings);
        toast.success('SMS activity notification settings saved successfully!');
    };

    const handleMatchSave = () => {
        console.log('SMS Match Settings:', matchSettings);
        toast.success('SMS match settings saved successfully!');
    };

    const updateActivitySetting = (key: keyof SMSActivitySettings, value: boolean) => {
        setActivitySettings(prev => ({ ...prev, [key]: value }));
    };

    const updateMatchSetting = (key: keyof SMSMatchSettings, value: boolean) => {
        setMatchSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="space-y-6">
            <NotificationSettingsCard title="Activity" onSave={handleActivitySave}>
                <div className="space-y-4">
                    <CheckboxItem
                        id="sms-shortlist"
                        label="Shortlist"
                        description="Receive an email whenever a member shortlist your profile."
                        checked={activitySettings.shortlist}
                        onCheckedChange={(checked) => updateActivitySetting('shortlist', checked)}
                    />
                    <CheckboxItem
                        id="sms-profile-view"
                        label="Profile View"
                        description="Receive an email whenever a member views your profile."
                        checked={activitySettings.profileView}
                        onCheckedChange={(checked) => updateActivitySetting('profileView', checked)}
                    />
                </div>
            </NotificationSettingsCard>

            <NotificationSettingsCard title="Match Recommendations" onSave={handleMatchSave}>
                <div className="space-y-4">
                    <CheckboxItem
                        id="sms-photo-matches"
                        label="Photo Matches"
                        description="Get updates on member's recently adding photos."
                        checked={matchSettings.photoMatches}
                        onCheckedChange={(checked) => updateMatchSetting('photoMatches', checked)}
                    />
                </div>
            </NotificationSettingsCard>
        </div>
    );
};