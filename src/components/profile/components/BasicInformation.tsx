'use client';

import { User, Edit, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface BasicInformationProps {
    age: number;
    religion: string;
    gender: string;
    isOwnProfile: boolean;
    onSave?: (data: { age: number; religion: string; gender: string }) => void;
}

export function BasicInformation({ age, religion, gender, isOwnProfile, onSave }: BasicInformationProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ age, religion, gender });

    const handleSave = () => {
        console.log('Basic Information Updated:', formData);
        onSave?.(formData);
        setIsEditing(false);
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-[#346FB7]" />
                    <CardTitle className="text-lg text-[#346FB7]">Basic Information</CardTitle>
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
                            <span className="text-sm text-gray-600">Age</span>
                            <Input
                                type="number"
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                                className="w-32 h-8"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Religion</span>
                            <Input
                                value={formData.religion}
                                onChange={(e) => setFormData({ ...formData, religion: e.target.value })}
                                className="w-32 h-8"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Gender</span>
                            <Input
                                value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                className="w-32 h-8"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Age</span>
                            <span className="text-sm font-medium text-gray-800">{formData.age}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Religion</span>
                            <span className="text-sm font-medium text-gray-800">{formData.religion}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Gender</span>
                            <span className="text-sm font-medium text-gray-800">{formData.gender}</span>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
