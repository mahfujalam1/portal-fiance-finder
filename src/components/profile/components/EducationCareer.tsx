'use client';

import { GraduationCap, Edit, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

/* ================= Types ================= */

interface EducationCareerData {
    education: string;
    institute: string;
    profession: string;
    monthlyIncome: string;
    areaField: string;
    company: string;
}

interface EducationCareerProps extends EducationCareerData {
    isOwnProfile: boolean;
    onSave?: (data: EducationCareerData) => void;
}

/* ================= Component ================= */

export function EducationCareer({
    education,
    institute,
    profession,
    monthlyIncome,
    areaField,
    company,
    isOwnProfile,
    onSave,
}: EducationCareerProps) {
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState<EducationCareerData>({
        education,
        institute,
        profession,
        monthlyIncome,
        areaField,
        company,
    });

    const handleSave = () => {
        console.log('Education & Career Updated:', formData);
        onSave?.(formData);
        setIsEditing(false);
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#346FB7]" />
                    <CardTitle className="text-lg text-[#346FB7]">
                        Education & Career
                    </CardTitle>
                </div>

                {isOwnProfile && (
                    <div className="flex gap-2">
                        {isEditing ? (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleSave}
                            >
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
                        <div>
                            <p className="text-sm text-gray-600 mb-1">
                                Education
                            </p>
                            <Input
                                value={formData.education}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        education: e.target.value,
                                    })
                                }
                                className="h-8"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-gray-600 mb-1">
                                Institute
                            </p>
                            <Input
                                value={formData.institute}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        institute: e.target.value,
                                    })
                                }
                                className="h-8"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-gray-600 mb-1">
                                Profession
                            </p>
                            <Input
                                value={formData.profession}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        profession: e.target.value,
                                    })
                                }
                                className="h-8"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-gray-600 mb-1">
                                Monthly Income
                            </p>
                            <Input
                                value={formData.monthlyIncome}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        monthlyIncome: e.target.value,
                                    })
                                }
                                className="h-8"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-gray-600 mb-1">
                                Area / Field
                            </p>
                            <Input
                                value={formData.areaField}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        areaField: e.target.value,
                                    })
                                }
                                className="h-8"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-gray-600 mb-1">
                                Company
                            </p>
                            <Input
                                value={formData.company}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        company: e.target.value,
                                    })
                                }
                                className="h-8"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <p className="text-sm text-gray-600">Education</p>
                            <p className="text-sm font-medium text-gray-800">
                                {formData.education}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-600">Institute</p>
                            <p className="text-sm font-medium text-gray-800">
                                {formData.institute}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-600">Profession</p>
                            <p className="text-sm font-medium text-gray-800">
                                {formData.profession}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-600">
                                Monthly Income
                            </p>
                            <p className="text-sm font-medium text-gray-800">
                                {formData.monthlyIncome}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-600">
                                Area / Field
                            </p>
                            <p className="text-sm font-medium text-gray-800">
                                {formData.areaField}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-600">Company</p>
                            <p className="text-sm font-medium text-gray-800">
                                {formData.company}
                            </p>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
