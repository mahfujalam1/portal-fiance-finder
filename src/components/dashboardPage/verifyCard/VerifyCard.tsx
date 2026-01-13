"use client"

import type React from "react"

import { Shield } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

interface VerifyIdCardProps {
    onIdSelect?: (file: File) => void
}

export function VerifyIdCard({ onIdSelect }: VerifyIdCardProps) {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [fileName, setFileName] = useState<string>("")

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setFileName(file.name)
            onIdSelect?.(file)
        }
    }

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-[#346FB7]" />
                <h3 className="text-[#346FB7] font-semibold">Verify Profile With ID</h3>
            </div>

            <p className="text-[#346FB7] text-sm mb-4">
                Passport, National ID or
                <br />
                Driving License
            </p>

            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />

            <div className="mb-2 text-xs text-[#346FB7]/70 min-h-5">{fileName && `Selected: ${fileName}`}</div>

            <Button
                onClick={handleUploadClick}
                className="w-full"
            >
                UPLOAD
            </Button>
        </div>
    )
}
