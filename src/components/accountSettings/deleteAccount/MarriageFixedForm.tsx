import React, { useState, useRef } from 'react';
import { UserX, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

// Types
interface MarriageFixedFormData {
    source: 'fiance_finder' | 'other';
    accountId?: string;
    photo?: File;
    sourceName?: string;
    successStory?: string;
}

interface OtherReasonsFormData {
    reason: 'too_many_calls' | 'not_enough_matches' | 'wish_not_to_specify';
}

type DeleteAccountTab = 'marriage_fixed' | 'other_reasons';

// Marriage Fixed Form Component
export const MarriageFixedForm = ({
    onSubmit
}: {
    onSubmit: (data: MarriageFixedFormData) => void;
}) => {
    const [formData, setFormData] = useState<MarriageFixedFormData>({
        source: 'fiance_finder',
    });
    const [fileName, setFileName] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validate file type
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp'];
            if (!validTypes.includes(file.type)) {
                toast.error('Please select a valid image file (.jpg, .png, .gif, .bmp)');
                return;
            }

            // Validate file size (5MB)
            if (file.size > 5 * 1024 * 1024) {
                toast.error('File size must be less than 5MB');
                return;
            }

            setFormData(prev => ({ ...prev, photo: file }));
            setFileName(file.name);
        }
    };

    const handleChoosePhoto = () => {
        fileInputRef.current?.click();
    };

    const handleRemovePhoto = () => {
        setFormData(prev => ({ ...prev, photo: undefined }));
        setFileName('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = () => {
        if (formData.source === 'fiance_finder' && !formData.accountId) {
            toast.error('Please enter your Account ID');
            return;
        }

        if (formData.source === 'other' && !formData.sourceName) {
            toast.error('Please enter the source name');
            return;
        }

        onSubmit(formData);
    };

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Congratulations!</h3>
                <p className="text-gray-700">We are happy that you have found your life partner.</p>
            </div>

            <RadioGroup
                value={formData.source}
                onValueChange={(value: 'fiance_finder' | 'other') =>
                    setFormData(prev => ({ ...prev, source: value }))
                }
            >
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fiance_finder" id="fiance_finder" className="border-primary text-primary" />
                        <Label htmlFor="fiance_finder" className="font-medium cursor-pointer">
                            Through Fiancé Finder
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other_source" className="border-primary text-primary" />
                        <Label htmlFor="other_source" className="font-medium cursor-pointer">
                            Through other source
                        </Label>
                    </div>
                </div>
            </RadioGroup>

            {formData.source === 'fiance_finder' ? (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="accountId" className="text-sm font-medium">
                            Account ID
                        </Label>
                        <Input
                            id="accountId"
                            placeholder="Write here"
                            value={formData.accountId || ''}
                            onChange={(e) => setFormData(prev => ({ ...prev, accountId: e.target.value }))}
                            className="max-w-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm font-medium">Attach a photo</Label>
                        <div className="flex items-center gap-4">
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".jpg,.jpeg,.png,.gif,.bmp"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            {fileName ? (
                                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md">
                                    <span className="text-sm text-gray-700">{fileName}</span>
                                    <button
                                        onClick={handleRemovePhoto}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ) : (
                                <Button
                                    type="button"
                                    onClick={handleChoosePhoto}
                                    variant="default"
                                    className="bg-primary hover:bg-primary/90"
                                >
                                    Choose Photo
                                </Button>
                            )}
                        </div>
                        <p className="text-xs text-gray-500">
                            .jpg, .gif, .png, .bmp file only (max. size 5MB)
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="sourceName" className="text-sm font-medium">
                            Source Name
                        </Label>
                        <Input
                            id="sourceName"
                            placeholder="Write here"
                            value={formData.sourceName || ''}
                            onChange={(e) => setFormData(prev => ({ ...prev, sourceName: e.target.value }))}
                            className="max-w-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="successStory" className="text-sm font-medium">
                            Success Story
                        </Label>
                        <Textarea
                            id="successStory"
                            placeholder="Write here"
                            value={formData.successStory || ''}
                            onChange={(e) => setFormData(prev => ({ ...prev, successStory: e.target.value }))}
                            className="min-h-[120px] resize-none"
                        />
                    </div>
                </>
            )}

            <Button
                onClick={handleSubmit}
                variant="default"
                className="bg-red-600 hover:bg-red-700 text-white"
            >
                Delete Account
            </Button>
        </div>
    );
};