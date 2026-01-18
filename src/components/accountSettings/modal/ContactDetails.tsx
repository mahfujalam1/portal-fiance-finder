'use client'

import { Eye, EyeOff, User } from "lucide-react";
import OTPVerificationModal from "./OTPVerificationModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

// Types
interface ContactDetails {
    email: string;
    mobileNumber: string;
    currentPassword: string;
    newPassword?: string;
}

const ContactDetails = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showOTPModal, setShowOTPModal] = useState(false);

    const [details, setDetails] = useState<ContactDetails>({
        email: 'ronnie.ramirez@mail.com',
        mobileNumber: '(624)427-3788',
        currentPassword: '12345678',
        newPassword: '12345678',
    });

    const [editedDetails, setEditedDetails] = useState<ContactDetails>({ ...details });
    const [errors, setErrors] = useState<any>({}); // Store error messages

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedDetails({ ...details });
        setErrors({}); // Clear errors when editing starts
    };

    const handleUpdateClick = () => {
        const validationErrors: any = {};
        toast.success('Check Your gmail and verify OTP!')

        // Validate email format
        if (!editedDetails.email || !/\S+@\S+\.\S+/.test(editedDetails.email)) {
            validationErrors.email = "Please enter a valid email address.";
        }

        // Validate password fields if editing
        if (isEditing) {
            if (!editedDetails.currentPassword) {
                validationErrors.currentPassword = "Current password is required.";
            }

            if (editedDetails.newPassword && editedDetails.newPassword.length < 8) {
                validationErrors.newPassword = "New password must be at least 8 characters long.";
            }
        }

        // Validate mobile number
        if (!editedDetails.mobileNumber || !/^\(\d{3}\)\d{3}-\d{4}$/.test(editedDetails.mobileNumber)) {
            validationErrors.mobileNumber = "Please enter a valid mobile number (e.g., (xxx)xxx-xxxx).";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setShowOTPModal(true);
        }
    };

    const handleOTPVerify = () => {
        setDetails({ ...editedDetails });
        setIsEditing(false);
        setShowOTPModal(false);
        toast.success('Contact details updated successfully!');
    };

    const handleChange = (field: keyof ContactDetails, value: string) => {
        setEditedDetails(prev => ({ ...prev, [field]: value }));
        
    };

    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#346FB7] flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-2xl font-semibold text-primary">Contact Details</h2>
                    </div>

                    {!isEditing ? (
                        <Button
                            onClick={handleEditClick}
                            variant="outline"
                        >
                            Edit
                        </Button>
                    ) : (
                        <Button
                            onClick={handleUpdateClick}
                        >
                            Update
                        </Button>
                    )}
                </div>

                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Email</Label>
                            <div className="flex items-center gap-2">
                                <Input
                                    value={isEditing ? editedDetails.email : details.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    disabled={!isEditing}
                                    className="flex-1"
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                                
                            </div>
                        </div>

                        {/* Current Password Field */}
                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Current Password</Label>
                            <div className="relative">
                                <Input
                                    type={showCurrentPassword ? 'text' : 'password'}
                                    value={editedDetails.currentPassword}
                                    onChange={(e) => handleChange('currentPassword', e.target.value)}
                                    disabled={!isEditing}
                                    className="pr-10"
                                />
                                {errors.currentPassword && <span className="text-red-500 text-sm">{errors.currentPassword}</span>}
                                <button
                                    type="button"
                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showNewPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Number Field */}
                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Mobile Number</Label>
                            <div className="flex items-center gap-2">
                                <Input
                                    value={isEditing ? editedDetails.mobileNumber : details.mobileNumber}
                                    onChange={(e) => handleChange('mobileNumber', e.target.value)}
                                    disabled={!isEditing}
                                    className="flex-1"
                                />
                                {errors.mobileNumber && <span className="text-red-500 text-sm">{errors.mobileNumber}</span>}
                                
                            </div>
                        </div>

                        {/* New Password Field (only in edit mode) */}
                        {isEditing && (
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">New Password</Label>
                                <div className="relative">
                                    <Input
                                        type={showNewPassword ? 'text' : 'password'}
                                        value={editedDetails.newPassword}
                                        onChange={(e) => handleChange('newPassword', e.target.value)}
                                        placeholder="Enter new password"
                                        className="pr-10"
                                    />
                                    {errors.newPassword && <span className="text-red-500 text-sm">{errors.newPassword}</span>}
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showNewPassword ?  <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <OTPVerificationModal
                isOpen={showOTPModal}
                onClose={() => setShowOTPModal(false)}
                onVerify={handleOTPVerify}
                email={editedDetails.email}
            />
        </>
    );
};

export default ContactDetails;
