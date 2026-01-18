import { useState, useRef } from 'react';
import { UserX, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';




interface OtherReasonsFormData {
    reason: 'too_many_calls' | 'not_enough_matches' | 'wish_not_to_specify';
}



export const OtherReasonsForm = ({
    onSubmit
}: {
    onSubmit: (data: OtherReasonsFormData) => void;
}) => {
    const [selectedReason, setSelectedReason] = useState<OtherReasonsFormData['reason']>('too_many_calls');

    const handleSubmit = () => {
        onSubmit({ reason: selectedReason });
    };

    return (
        <div className="space-y-6">
            <RadioGroup
                value={selectedReason}
                onValueChange={(value: OtherReasonsFormData['reason']) => setSelectedReason(value)}
            >
                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="too_many_calls" id="too_many_calls" className="border-primary text-primary" />
                        <Label htmlFor="too_many_calls" className="font-medium cursor-pointer">
                            Too many calls from executives
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="not_enough_matches" id="not_enough_matches" className="border-primary text-primary" />
                        <Label htmlFor="not_enough_matches" className="font-medium cursor-pointer">
                            Not getting enough matches
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="wish_not_to_specify" id="wish_not_to_specify" className="border-primary text-primary" />
                        <Label htmlFor="wish_not_to_specify" className="font-medium cursor-pointer">
                            Wish not to specify
                        </Label>
                    </div>
                </div>
            </RadioGroup>

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

