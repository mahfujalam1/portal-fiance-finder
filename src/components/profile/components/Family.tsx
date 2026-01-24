'use client';

import { Users, Edit, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface FamilyProps {
    fatherStatus: string;
    fatherOccupation: string;
    motherStatus: string;
    motherOccupation: string;
    siblings: string;
    sisters: string;
    affluence: string;
    livesIn: string;
    isOwnProfile: boolean;
    onSave?: (data: FamilyFormData) => void;
}

interface FamilyFormData {
    fatherStatus: string;
    fatherOccupation: string;
    motherStatus: string;
    motherOccupation: string;
    siblings: string;
    sisters: string;
    affluence: string;
    livesIn: string;
}

export function Family({
    fatherStatus,
    fatherOccupation,
    motherStatus,
    motherOccupation,
    siblings,
    sisters,
    affluence,
    livesIn,
    isOwnProfile,
    onSave,
}: FamilyProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<FamilyFormData>({
        fatherStatus,
        fatherOccupation,
        motherStatus,
        motherOccupation,
        siblings,
        sisters,
        affluence,
        livesIn,
    });

    const handleSave = () => {
        console.log('Family Information Updated:', formData);
        onSave?.(formData);
        setIsEditing(false);
    };

    const handleChange = (field: keyof FamilyFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <Card>
            <CardHeader className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#346FB7]" />
                    <CardTitle className="text-lg text-[#346FB7]">Family</CardTitle>
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
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Father's Status</p>
                            <Input
                                value={formData.fatherStatus}
                                onChange={e => handleChange('fatherStatus', e.target.value)}
                                className="h-8"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Father's Occupation</p>
                            <Input
                                value={formData.fatherOccupation}
                                onChange={e => handleChange('fatherOccupation', e.target.value)}
                                className="h-8"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Mother's Status</p>
                            <Input
                                value={formData.motherStatus}
                                onChange={e => handleChange('motherStatus', e.target.value)}
                                className="h-8"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Mother's Occupation</p>
                            <Input
                                value={formData.motherOccupation}
                                onChange={e => handleChange('motherOccupation', e.target.value)}
                                className="h-8"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Siblings</span>
                            <Input
                                value={formData.siblings}
                                onChange={e => handleChange('siblings', e.target.value)}
                                className="w-32 h-8"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Sisters</span>
                            <Input
                                value={formData.sisters}
                                onChange={e => handleChange('sisters', e.target.value)}
                                className="w-32 h-8"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Affluence</p>
                            <Input
                                value={formData.affluence}
                                onChange={e => handleChange('affluence', e.target.value)}
                                className="h-8"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Lives In</p>
                            <Input
                                value={formData.livesIn}
                                onChange={e => handleChange('livesIn', e.target.value)}
                                className="h-8"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <p className="text-sm text-gray-600">Father's Status</p>
                            <p className="text-sm font-medium text-gray-800">{formData.fatherStatus}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Father's Occupation</p>
                            <p className="text-sm font-medium text-gray-800">{formData.fatherOccupation}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Mother's Status</p>
                            <p className="text-sm font-medium text-gray-800">{formData.motherStatus}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Mother's Occupation</p>
                            <p className="text-sm font-medium text-gray-800">{formData.motherOccupation}</p>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Siblings</span>
                            <span className="text-sm font-medium text-gray-800">{formData.siblings}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Sisters</span>
                            <span className="text-sm font-medium text-gray-800">{formData.sisters}</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Affluence</p>
                            <p className="text-sm font-medium text-gray-800">{formData.affluence}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Lives In</p>
                            <p className="text-sm font-medium text-gray-800">{formData.livesIn}</p>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
