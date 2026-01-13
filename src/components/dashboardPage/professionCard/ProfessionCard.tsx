"use client"

import { Button } from "@/components/ui/button"
import { Briefcase, ChevronDown } from "lucide-react"
import { useState } from "react"

interface ProfessionalDetailsCardProps {
    onSubmit?: (profession: string) => void
}

const professionOptions = [
    "Government Job",
    "Private Job",
    "Business",
    "Unemployed",
]

export function ProfessionalDetailsCard({ onSubmit }: ProfessionalDetailsCardProps) {
    const [profession, setProfession] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = () => {
        if (!profession) return
        onSubmit?.(profession)
        setProfession("")
        setIsOpen(false)
    }

    return (
        <div className="bg-white rounded-lg p-6 shadow-md">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-[#346FB7]" />
                <h3 className="text-[#346FB7] font-semibold">
                    Add Professional Details
                </h3>
            </div>

            {/* Dropdown */}
            <div className="relative mb-4">
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between px-3 py-1 text-sm border border-[#65CBE2] rounded-md text-[#346FB7] hover:bg-[#F5F8FC] transition"
                >
                    <span>{profession || "Select profession"}</span>
                    <ChevronDown
                        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""
                            }`}
                    />
                </button>

                {isOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-[#65CBE2]/40 rounded-md shadow-lg">
                        {professionOptions.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => {
                                    setProfession(option)
                                    setIsOpen(false)
                                }}
                                className="w-full text-left px-3 py-1 text-sm text-[#346FB7] hover:bg-[#E6EBF6] transition"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Submit */}
            <Button
                onClick={handleSubmit}
                disabled={!profession}
                className="w-full"
            >
                SUBMIT
            </Button>
        </div>
    )
}
