import React, { useState, KeyboardEvent, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';

const OTPVerificationModal = ({
    isOpen,
    onClose,
    onVerify,
    email
}: {
    isOpen: boolean;
    onClose: () => void;
    onVerify: () => void;
    email: string;
}) => {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // Ref for storing input elements

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        const newOtp = [...otp];

        pastedData.split('').forEach((char, index) => {
            if (index < 6 && /^\d$/.test(char)) {
                newOtp[index] = char;
            }
        });

        setOtp(newOtp);
        const lastFilledIndex = Math.min(pastedData.length, 5);
        inputRefs.current[lastFilledIndex]?.focus();
    };

    const handleVerify = () => {
        const otpValue = otp.join('');
        if (otpValue.length === 6) {
            onVerify();
            setOtp(Array(6).fill(''));
        } else {
            toast.error('Please enter complete OTP');
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-[#346FB7]">Verify OTP</DialogTitle>
                    <DialogDescription>
                        We have sent a verification code to {email}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <div className="flex justify-center gap-2">
                        {otp.map((digit, index) => (
                            <Input
                                key={index}
                                ref={(el) => {
                                    inputRefs.current[index] = el;
                                }} // Properly handling the ref
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={index === 0 ? handlePaste : undefined}
                                className="w-12 h-12 text-center text-lg font-semibold border-2 focus:border-[#346FB7]"
                            />
                        ))}
                    </div>

                    <Button
                        onClick={handleVerify}
                        className="w-full bg-[#346FB7] hover:bg-[#2d5a99] text-white"
                    >
                        Verify
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default OTPVerificationModal;
