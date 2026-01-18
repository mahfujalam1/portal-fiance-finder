"use client"

import { useState } from "react"
import { Plus, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhotoGalleryModal } from "@/modal/PhotoGalleryModal"
import { IMAGES } from "@/constant/image.index"

interface ProfilePictureProps {
    src: string
    alt: string
    name: string
    userId: string
    hisProfile?: boolean
    onPhotoChange?: (photoUrl: string) => void
}

export function ProfilePicture({ src, alt, name, userId, hisProfile = false, onPhotoChange }: ProfilePictureProps) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)

    return (
        <>
            <div className="flex flex-col items-center gap-4  p-6">
                {/* Profile Picture Container */}
                <div className="relative group">
                    <div className="w-60 h-60 rounded-lg overflow-hidden border-4 border-primary bg-card">
                        <img src={IMAGES.profile2.src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
                    </div>

                    {/* Plus Icon Button for Upload */}
                    {hisProfile && (
                        <button
                            onClick={() => setIsGalleryOpen(true)}
                            className="absolute bottom-2 right-2 bg-primary text-white rounded-full p-2 hover:bg-primary/90 transition-colors shadow-lg"
                            title="Upload photo"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    )}
                </div>

                {/* Name and ID */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground">{name}</h2>
                    <p className="text-sm text-muted-foreground">ID: {userId}</p>
                </div>

                {/* Change Photo Button */}
                {hisProfile && (
                    <Button onClick={() => setIsGalleryOpen(true)} variant="outline" className="gap-2 w-full">
                        <Camera className="w-4 h-4" />
                        Change Photo
                    </Button>
                )}
            </div>

            {/* Photo Gallery Modal */}
            <PhotoGalleryModal
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
                onSelectPhoto={(photoUrl) => {
                    onPhotoChange?.(photoUrl)
                    setIsGalleryOpen(false)
                }}
            />
        </>
    )
}
