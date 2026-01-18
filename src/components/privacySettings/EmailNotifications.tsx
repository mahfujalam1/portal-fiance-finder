'use client'

import { useState } from "react";
import { toast } from "sonner";
import { NotificationSettingsCard } from "./NotificationSettingsCard";
import { CheckboxItem } from "../ui/CheckboxItem";


interface ActivitySettings {
    connect: boolean;
    shortlist: boolean;
    profileView: boolean;
    textReply: boolean;
}

interface MatchRecommendationSettings {
    recentlyJoined: boolean;
    profilesYouMayLike: boolean;
}


export const EmailNotifications = () => {
    const [activitySettings, setActivitySettings] = useState<ActivitySettings>({
        connect: true,
        shortlist: true,
        profileView: true,
        textReply: true,
    });

    const [matchSettings, setMatchSettings] = useState<MatchRecommendationSettings>({
        recentlyJoined: true,
        profilesYouMayLike: true,
    });

    const handleActivitySave = () => {
        console.log('Activity Settings:', activitySettings);
        toast.success('Activity notification settings saved successfully!');
    };

    const handleMatchSave = () => {
        console.log('Match Recommendation Settings:', matchSettings);
        toast.success('Match recommendation settings saved successfully!');
    };

    const updateActivitySetting = (key: keyof ActivitySettings, value: boolean) => {
        setActivitySettings(prev => ({ ...prev, [key]: value }));
    };

    const updateMatchSetting = (key: keyof MatchRecommendationSettings, value: boolean) => {
        setMatchSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="space-y-6">
            <NotificationSettingsCard title="Activity" onSave={handleActivitySave}>
                <div className="space-y-4">
                    <CheckboxItem
                        id="email-connect"
                        label="Connect"
                        description="Receive an email whenever a member connects your profile."
                        checked={activitySettings.connect}
                        onCheckedChange={(checked) => updateActivitySetting('connect', checked)}
                    />
                    <CheckboxItem
                        id="email-shortlist"
                        label="Shortlist"
                        description="Receive an email whenever a member shortlist your profile."
                        checked={activitySettings.shortlist}
                        onCheckedChange={(checked) => updateActivitySetting('shortlist', checked)}
                    />
                    <CheckboxItem
                        id="email-profile-view"
                        label="Profile View"
                        description="Receive an email whenever a member views your profile."
                        checked={activitySettings.profileView}
                        onCheckedChange={(checked) => updateActivitySetting('profileView', checked)}
                    />
                    <CheckboxItem
                        id="email-text-reply"
                        label="Text Reply"
                        description="Receive an email whenever a member replies to your texts."
                        checked={activitySettings.textReply}
                        onCheckedChange={(checked) => updateActivitySetting('textReply', checked)}
                    />
                </div>
            </NotificationSettingsCard>

            <NotificationSettingsCard title="Match Recommendations" onSave={handleMatchSave}>
                <div className="space-y-4">
                    <CheckboxItem
                        id="email-recently-joined"
                        label="Recently Joined"
                        description="Receive an email whenever a member joins Fiance Finder."
                        checked={matchSettings.recentlyJoined}
                        onCheckedChange={(checked) => updateMatchSetting('recentlyJoined', checked)}
                    />
                    <CheckboxItem
                        id="email-profiles-you-may-like"
                        label="Profiles You May Like"
                        description="Get notified by email of random members suitable for you."
                        checked={matchSettings.profilesYouMayLike}
                        onCheckedChange={(checked) => updateMatchSetting('profilesYouMayLike', checked)}
                    />
                </div>
            </NotificationSettingsCard>
        </div>
    );
};