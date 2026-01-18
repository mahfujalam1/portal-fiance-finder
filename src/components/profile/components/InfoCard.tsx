"use client"

import type React from "react"

import { useState } from "react"
import { Edit2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InfoField {
    key: string
    label: string
    value: string
}

interface InfoCardProps {
    title: string
    icon?: React.ReactNode
    fields: InfoField[]
    hisProfile?: boolean
    onSave?: (updatedData: Record<string, string>) => void
}

export function InfoCard({ title, icon, fields, hisProfile = false, onSave }: InfoCardProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedData, setEditedData] = useState<Record<string, string>>(
        fields.reduce((acc, field) => ({ ...acc, [field.key]: field.value }), {}),
    )

    const handleFieldChange = (key: string, value: string) => {
        setEditedData((prev) => ({ ...prev, [key]: value }))
    }

    const handleSave = () => {
        console.log("Saving data:", editedData)
        onSave?.(editedData)
        setIsEditing(false)
    }

    return (
        <Card className="border border-border hover:border-primary/50 transition-colors p-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div className="flex items-center gap-2">
                    {icon && <span className="text-primary">{icon}</span>}
                    <CardTitle className="text-lg">{title}</CardTitle>
                </div>
                {hisProfile && !isEditing && (
                    <Button onClick={() => setIsEditing(true)} variant="ghost" size="icon" className="hover:bg-primary/10">
                        <Edit2 className="w-4 h-4 text-primary" />
                    </Button>
                )}
                {hisProfile && isEditing && (
                    <Button onClick={handleSave} variant="ghost" size="icon" className="hover:bg-green-500/10">
                        <Check className="w-4 h-4 text-green-600" />
                    </Button>
                )}
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {fields.map((field) => (
                        <div key={field.key} className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                {field.label}
                            </label>
                            {isEditing && hisProfile ? (
                                <Input
                                    value={editedData[field.key]}
                                    onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                    className="border-primary/30 focus:border-primary"
                                />
                            ) : (
                                <p className="text-sm font-medium text-foreground">{editedData[field.key] || "-"}</p>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
