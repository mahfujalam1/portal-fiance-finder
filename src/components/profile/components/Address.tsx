// components/profile/Address.tsx
'use client';

import { MapPin, Edit, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

/* ================= Types ================= */

interface AddressData {
    homeDistrict: string;
    country: string;
    postalCode: string;
    location: string;
}

interface AddressProps extends AddressData {
    isOwnProfile: boolean;
    onSave?: (data: AddressData) => void;
}

/* ================= Component ================= */

export function Address({
    homeDistrict,
    country,
    postalCode,
    location,
    isOwnProfile,
    onSave,
}: AddressProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<AddressData>({
        homeDistrict,
        country,
        postalCode,
        location,
    });

    const handleSave = () => {
        console.log('Address Updated:', formData);
        onSave?.(formData);
        setIsEditing(false);
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#346FB7]" />
                    <CardTitle className="text-lg text-[#346FB7]">
                        Address
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
                                Home District
                            </p>
                            <Input
                                value={formData.homeDistrict}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        homeDistrict: e.target.value,
                                    })
                                }
                                className="h-8"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-gray-600 mb-1">
                                Country
                            </p>
                            <Input
                                value={formData.country}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        country: e.target.value,
                                    })
                                }
                                className="h-8"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-gray-600 mb-1">
                                Postal Code
                            </p>
                            <Input
                                value={formData.postalCode}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        postalCode: e.target.value,
                                    })
                                }
                                className="h-8"
                            />
                        </div>

                        <div>
                            <p className="text-sm text-gray-600 mb-1">
                                Location
                            </p>
                            <Textarea
                                value={formData.location}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        location: e.target.value,
                                    })
                                }
                                rows={3}
                                className="text-sm"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <p className="text-sm text-gray-600">
                                Home District
                            </p>
                            <p className="text-sm font-medium text-gray-800">
                                {formData.homeDistrict}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-600">Country</p>
                            <p className="text-sm font-medium text-gray-800">
                                {formData.country}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-600">
                                Postal Code
                            </p>
                            <p className="text-sm font-medium text-gray-800">
                                {formData.postalCode}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-600">Location</p>
                            <p className="text-sm font-medium text-gray-800">
                                {formData.location}
                            </p>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
