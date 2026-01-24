'use client';

import { Info, Edit, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

/* ---------- Types ---------- */
export interface MoreInformationData {
    height: string;
    weight: string;
    skinTone: string;
    bodyType: string;
    community: string;
    profileFor: string;
    maritalStatus: string;
}

interface MoreInformationProps extends MoreInformationData {
    isOwnProfile: boolean;
    onSave?: (data: MoreInformationData) => void;
}

/* ---------- Component ---------- */
export function MoreInformation({
    height,
    weight,
    skinTone,
    bodyType,
    community,
    profileFor,
    maritalStatus,
    isOwnProfile,
    onSave,
}: MoreInformationProps) {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const [formData, setFormData] = useState<MoreInformationData>({
        height,
        weight,
        skinTone,
        bodyType,
        community,
        profileFor,
        maritalStatus,
    });

    const handleSave = () => {
        console.log('More Information Updated:', formData);
        onSave?.(formData);
        setIsEditing(false);
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-[#346FB7]" />
                    <CardTitle className="text-lg text-[#346FB7]">
                        More Information
                    </CardTitle>
                </div>

                {isOwnProfile && (
                    <div className="flex gap-2">
                        {isEditing ? (
                            <Button variant="ghost" size="sm" onClick={handleSave}>
                                <Check className="w-4 h-4 text-green-600" />
                            </Button>
                        ) : (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsEditing(true)}
                            >
                                <Edit className="w-4 h-4" />
                            </Button>
                        )}
                    </div>
                )}
            </CardHeader>

            <CardContent className="space-y-3">
                {isEditing ? (
                    <>
                        {(
                            Object.entries(formData) as [
                                keyof MoreInformationData,
                                string
                            ][]
                        ).map(([key, value]) => (
                            <div
                                key={key}
                                className="flex justify-between items-center"
                            >
                                <span className="text-sm text-gray-600 capitalize">
                                    {key.replace(/([A-Z])/g, ' $1')}
                                </span>
                                <Input
                                    value={value}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [key]: e.target.value,
                                        })
                                    }
                                    className="w-32 h-8"
                                />
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {Object.entries(formData).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                                <span className="text-sm text-gray-600 capitalize">
                                    {key.replace(/([A-Z])/g, ' $1')}
                                </span>
                                <span className="text-sm font-medium text-gray-800">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </>
                )}
            </CardContent>
        </Card>
    );
}
