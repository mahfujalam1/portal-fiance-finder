'use client';

import { Info, Edit, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface MoreInformationProps {
    height: string;
    weight: string;
    skinTone: string;
    bodyType: string;
    community: string;
    profileFor: string;
    maritalStatus: string;
    isOwnProfile: boolean;
    onSave?: (data: any) => void;
}

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
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
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
                    <CardTitle className="text-lg text-[#346FB7]">More Information</CardTitle>
                </div>
                {isOwnProfile && (
                    <div className="flex gap-2">
                        {isEditing ? (
                            <Button variant="ghost" size="sm" onClick={handleSave}>
                                <Check className="w-4 h-4 text-green-600" />
                            </Button>
                        ) : (
                            <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                                <Edit className="w-4 h-4" />
                            </Button>
                        )}
                    </div>
                )}
            </CardHeader>
            <CardContent className="space-y-3">
                {isEditing ? (
                    <>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Height</span>
                            <Input
                                value={formData.height}
                                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                                className="w-32 h-8"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Weight</span>
                            <Input
                                value={formData.weight}
                                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                className="w-32 h-8"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Skin Tone</span>
                            <Input
                                value={formData.skinTone}
                                onChange={(e) => setFormData({ ...formData, skinTone: e.target.value })}
                                className="w-32 h-8"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Body Type</span>
                            <Input
                                value={formData.bodyType}
                                onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
                                className="w-32 h-8"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Community</span>
                            <Input
                                value={formData.community}
                                onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                                className="w-32 h-8"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Profile For</span>
                            <Input
                                value={formData.profileFor}
                                onChange={(e) => setFormData({ ...formData, profileFor: e.target.value })}
                                className="w-32 h-8"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Marital Status</span>
                            <Input
                                value={formData.maritalStatus}
                                onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
                                className="w-32 h-8"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Height</span>
                            <span className="text-sm font-medium text-gray-800">{formData.height}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Weight</span>
                            <span className="text-sm font-medium text-gray-800">{formData.weight}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Skin Tone</span>
                            <span className="text-sm font-medium text-gray-800">{formData.skinTone}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Body Type</span>
                            <span className="text-sm font-medium text-gray-800">{formData.bodyType}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Community</span>
                            <span className="text-sm font-medium text-gray-800">{formData.community}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Profile For</span>
                            <span className="text-sm font-medium text-gray-800">{formData.profileFor}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Marital Status</span>
                            <span className="text-sm font-medium text-gray-800">{formData.maritalStatus}</span>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
