import { Heart, Edit, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
interface LifestyleProps {
    smoking: boolean;
    drinking: boolean;
    vegetarian: boolean;
    annoyane: boolean;
    badMood: boolean;
    recklessDriving: boolean;
    hobbies: string;
    isOwnProfile: boolean;
    onSave?: (data: any) => void;
}
export function Lifestyle({
    smoking,
    drinking,
    vegetarian,
    annoyane,
    badMood,
    recklessDriving,
    hobbies,
    isOwnProfile,
    onSave,
}: LifestyleProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        smoking,
        drinking,
        vegetarian,
        annoyane,
        badMood,
        recklessDriving,
        hobbies,
    });
    const handleSave = () => {
        console.log('Lifestyle Updated:', formData);
        onSave?.(formData);
        setIsEditing(false);
    };
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#346FB7]" />
                    <CardTitle className="text-lg text-[#346FB7]">Life Style</CardTitle>
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
            <CardContent className="space-y-4">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Smoking</span>
                        <Checkbox
                            checked={formData.smoking}
                            disabled={!isEditing}
                            onCheckedChange={(checked) =>
                                setFormData({ ...formData, smoking: checked as boolean })
                            }
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Drinking</span>
                        <Checkbox
                            checked={formData.drinking}
                            disabled={!isEditing}
                            onCheckedChange={(checked) =>
                                setFormData({ ...formData, drinking: checked as boolean })
                            }
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Vegetarian</span>
                        <Checkbox
                            checked={formData.vegetarian}
                            disabled={!isEditing}
                            onCheckedChange={(checked) =>
                                setFormData({ ...formData, vegetarian: checked as boolean })
                            }
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Annoyane</span>
                        <Checkbox
                            checked={formData.annoyane}
                            disabled={!isEditing}
                            onCheckedChange={(checked) =>
                                setFormData({ ...formData, annoyane: checked as boolean })
                            }
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Bad Mood</span>
                        <Checkbox
                            checked={formData.badMood}
                            disabled={!isEditing}
                            onCheckedChange={(checked) =>
                                setFormData({ ...formData, badMood: checked as boolean })
                            }
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Reckless Driving</span>
                        <Checkbox
                            checked={formData.recklessDriving}
                            disabled={!isEditing}
                            onCheckedChange={(checked) =>
                                setFormData({ ...formData, recklessDriving: checked as boolean })
                            }
                        />
                    </div>
                </div>
                <div>
                    <p className="text-sm text-gray-600 mb-2">Spends time in such places:</p>
                    {isEditing ? (
                        <Textarea
                            value={formData.hobbies}
                            onChange={(e) => setFormData({ ...formData, hobbies: e.target.value })}
                            rows={3}
                            className="text-sm"
                        />
                    ) : (
                        <p className="text-sm text-gray-700 leading-relaxed">{formData.hobbies}</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}