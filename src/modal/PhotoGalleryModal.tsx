"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Upload } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/constant/image.index"

interface PhotoGalleryModalProps {
    isOpen: boolean
    onClose: () => void
    onSelectPhoto: (photoUrl: string) => void
    onUploadPhoto?: (photoUrl: string) => void
}

const SAMPLE_PHOTOS = [IMAGES.profile1.src, IMAGES.profile2.src]

export function PhotoGalleryModal({ isOpen, onClose, onSelectPhoto, onUploadPhoto }: PhotoGalleryModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [photos, setPhotos] = useState<string[]>(SAMPLE_PHOTOS)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                const photoUrl = event.target?.result as string
                setPhotos([...photos, photoUrl])
                setCurrentIndex(photos.length)
                onUploadPhoto?.(photoUrl)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Select or Upload Your Photo</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-4">
                    {/* Main Photo Display */}
                    <div className="relative bg-card rounded-lg overflow-hidden h-96">
                        <img
                            src={photos[currentIndex] || "/placeholder.svg"}
                            alt="Gallery photo"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between">
                        <Button onClick={goToPrevious} variant="outline" size="icon" className="rounded-full bg-transparent">
                            <ChevronLeft className="w-4 h-4" />
                        </Button>

                        {/* Photo Counter */}
                        <span className="text-sm text-muted-foreground">
                            {currentIndex + 1} / {photos.length}
                        </span>

                        <Button onClick={goToNext} variant="outline" size="icon" className="rounded-full bg-transparent">
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {photos.map((photo, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`flex-shrink-0 w-16 h-20 rounded border-2 overflow-hidden transition-all ${currentIndex === index ? "border-primary" : "border-border hover:border-primary/50"
                                    }`}
                            >
                                <img
                                    src={photo || "/placeholder.svg"}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                        <Button onClick={() => fileInputRef.current?.click()} variant="outline" className="gap-2 flex-1">
                            <Upload className="w-4 h-4" />
                            Upload Photo
                        </Button>
                        <Button onClick={() => onSelectPhoto(photos[currentIndex])} className="flex-1">
                            Select This Photo
                        </Button>
                    </div>

                    {/* Hidden File Input */}
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </div>
            </DialogContent>
        </Dialog>
    )
}
