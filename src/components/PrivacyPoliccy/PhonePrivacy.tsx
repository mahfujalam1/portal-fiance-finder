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

interface PhonePrivacySettings {
    visibility: PrivacyType;
    grantedMatrimonyId?: string;
}


export const PhonePrivacy = () => {
    const [settings, setSettings] = useState<PhonePrivacySettings>({
        visibility: 'all',
        grantedMatrimonyId: '',
    });

    const handleSave = () => {
        console.log('Phone Privacy Settings:', settings);
        toast.success('Phone privacy settings saved successfully!');
    };

    const handleGrantAccess = () => {
        if (!settings.grantedMatrimonyId?.trim()) {
            toast.error('Please enter a Matrimony ID');
            return;
        }
        console.log('Granting phone access to:', settings.grantedMatrimonyId);
        toast.success(`Phone access granted to ${settings.grantedMatrimonyId}`);
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
                        id="phone-visible-paid"
                        label="Show mobile number only to paid members."
                    />
                    <RadioItem
                        value="granted"
                        id="phone-visible-granted"
                        label="Show mobile number only to whom I granted access."
                    />
                </div>
            </RadioGroup>

            {settings.visibility === 'granted' && (
                <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-4">
                        <Label htmlFor="phone-matrimony-id" className="text-base font-semibold whitespace-nowrap">
                            Matrimony ID
                        </Label>
                        <Input
                            id="phone-matrimony-id"
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