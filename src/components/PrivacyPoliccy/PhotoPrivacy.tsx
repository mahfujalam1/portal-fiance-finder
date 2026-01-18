'use client'

import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { RadioItem } from "../ui/RadioItem";
import { useState } from "react";

// Types
type PrivacyType = 'all' | 'granted';

interface PhotoPrivacySettings {
    visibility: PrivacyType;
    grantedMatrimonyId?: string;
}


export const PhotoPrivacy = () => {
    const [settings, setSettings] = useState<PhotoPrivacySettings>({
        visibility: 'all',
        grantedMatrimonyId: '',
    });

    const handleSave = () => {
        console.log('Photo Privacy Settings:', settings);
        toast.success('Photo privacy settings saved successfully!');
    };

    const handleGrantAccess = () => {
        if (!settings.grantedMatrimonyId?.trim()) {
            toast.error('Please enter a Matrimony ID');
            return;
        }
        console.log('Granting access to:', settings.grantedMatrimonyId);
        toast.success(`Access granted to ${settings.grantedMatrimonyId}`);
    };

    return (
        <div className="space-y-6">
            <RadioGroup
                value={settings.visibility}
                onValueChange={(value: PrivacyType) =>
                    setSettings(prev => ({ ...prev, visibility: value }))
                }
            >
                <div className="space-y-4">
                    <RadioItem
                        value="all"
                        id="photo-visible-all"
                        label="Make profile photo visible to all."
                    />
                    <RadioItem
                        value="granted"
                        id="photo-visible-granted"
                        label="Make profile photo visible only to whom I granted access."
                    />
                </div>
            </RadioGroup>

            {settings.visibility === 'granted' && (
                <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-4">
                        <Label htmlFor="photo-matrimony-id" className="text-base font-semibold whitespace-nowrap">
                            Matrimony ID
                        </Label>
                        <Input
                            id="photo-matrimony-id"
                            placeholder="Write ID here"
                            value={settings.grantedMatrimonyId}
                            onChange={(e) =>
                                setSettings(prev => ({ ...prev, grantedMatrimonyId: e.target.value }))
                            }
                            className="max-w-xs border-primary/30 focus:border-primary"
                        />
                    </div>
                    <Button
                        onClick={handleGrantAccess}
                        variant="default"
                        className="bg-primary hover:bg-primary/90"
                    >
                        Grant Access
                    </Button>
                </div>
            )}

            {settings.visibility === 'all' && (
                <Button
                    onClick={handleSave}
                    variant="default"
                    className="bg-primary hover:bg-primary/90"
                >
                    Save
                </Button>
            )}
        </div>
    );
};