import { Edit, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProfileHeaderProps {
    name: string;
    profileId: string;
    coverImage: string;
    profileImage: string;
    isOwnProfile: boolean;
    onEditCover?: () => void;
    onEditProfile?: () => void;
}

export function ProfileHeader({
    name,
    profileId,
    coverImage,
    profileImage,
    isOwnProfile,
    onEditCover,
    onEditProfile,
}: ProfileHeaderProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Cover Image */}
            <div className="relative h-48 bg-gradient-to-r from-[#346FB7] to-[#49cce9]">
                <Image
                    src={coverImage}
                    alt="Cover"
                    fill
                    className="object-cover"
                />
                {isOwnProfile && (
                    <Button
                        variant="secondary"
                        size="sm"
                        className="absolute top-4 right-4"
                        onClick={onEditCover}
                    >
                        <Camera className="w-4 h-4 mr-2" />
                        Change Cover
                    </Button>
                )}
            </div>

            {/* Profile Info */}
            <div className="relative px-6 pb-6">
                <div className="flex items-end gap-6">
                    {/* Profile Image */}
                    <div className="relative -mt-16">
                        <div className="relative w-32 h-32 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                            <Image
                                src={profileImage}
                                alt={name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {isOwnProfile && (
                            <Button
                                variant="secondary"
                                size="icon"
                                className="absolute bottom-0 right-0 rounded-full"
                                onClick={onEditProfile}
                            >
                                <Camera className="w-4 h-4" />
                            </Button>
                        )}
                    </div>

                    {/* Name and ID */}
                    <div className="flex-1 pt-4">
                        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                        <p className="text-sm text-gray-500">ID: {profileId}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}