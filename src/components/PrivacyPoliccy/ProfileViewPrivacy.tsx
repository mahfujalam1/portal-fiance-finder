'use client'

import { toast } from "sonner";
import { Button } from "../ui/button";
import { useState } from "react";
import { CheckboxItemSimple } from "../ui/CheckboxItemSimple";


interface ProfileViewSettings {
    notifyShortlist: boolean;
    notifyProfileView: boolean;
}


export const ProfileViewPrivacy = () => {
    const [settings, setSettings] = useState<ProfileViewSettings>({
        notifyShortlist: true,
        notifyProfileView: true,
    });

    const handleSave = () => {
        console.log('Profile View Settings:', settings);
        toast.success('Profile view settings saved successfully!');
    };

    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <CheckboxItemSimple
                    id="notify-shortlist"
                    label="Let other members know you have shortlisted them."
                    checked={settings.notifyShortlist}
                    onCheckedChange={(checked) =>
                        setSettings(prev => ({ ...prev, notifyShortlist: checked }))
                    }
                />
                <CheckboxItemSimple
                    id="notify-profile-view"
                    label="Let other members know you have viewed their profile."
                    checked={settings.notifyProfileView}
                    onCheckedChange={(checked) =>
                        setSettings(prev => ({ ...prev, notifyProfileView: checked }))
                    }
                />
            </div>

            <Button
                onClick={handleSave}
                variant="default"
                className="bg-primary hover:bg-primary/90"
            >
                Save
            </Button>
        </div>
    );
};