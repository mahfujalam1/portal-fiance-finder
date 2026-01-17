'use client';

import { FileText, Edit, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

interface AboutYourselfProps {
    content: string;
    isOwnProfile: boolean;
    onSave?: (content: string) => void;
}

export function AboutYourself({ content, isOwnProfile, onSave }: AboutYourselfProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(content);

    const handleSave = () => {
        console.log('About Yourself Updated:', text);
        onSave?.(text);
        setIsEditing(false);
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#346FB7]" />
                    <CardTitle className="text-lg text-[#346FB7]">About Yourself</CardTitle>
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
            <CardContent>
                {isEditing ? (
                    <Textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows={5}
                        className="text-sm"
                    />
                ) : (
                    <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
                )}
            </CardContent>
        </Card>
    );
}