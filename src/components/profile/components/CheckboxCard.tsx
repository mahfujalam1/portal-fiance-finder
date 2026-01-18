"use client"

import { useState } from "react"
import { Edit2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CheckboxField {
    key: string
    label: string
    checked: boolean
}

interface CheckboxCardProps {
    title: string
    fields: CheckboxField[]
    hisProfile?: boolean
    onSave?: (updatedData: Record<string, boolean>) => void
}

export function CheckboxCard({ title, fields, hisProfile = false, onSave }: CheckboxCardProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedData, setEditedData] = useState<Record<string, boolean>>(
        fields.reduce((acc, field) => ({ ...acc, [field.key]: field.checked }), {}),
    )

    const handleCheckboxChange = (key: string, checked: boolean) => {
        setEditedData((prev) => ({ ...prev, [key]: checked }))
    }

    const handleSave = () => {
        console.log("Saving checkbox data:", editedData)
        onSave?.(editedData)
        setIsEditing(false)
    }

    return (
        <Card className="border border-border hover:border-primary/50 transition-colors p-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg">{title}</CardTitle>
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
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {fields.map((field) => (
                        <div key={field.key} className="flex items-center gap-2">
                            <Checkbox
                                id={field.key}
                                checked={editedData[field.key]}
                                onCheckedChange={(checked) => handleCheckboxChange(field.key, checked as boolean)}
                                disabled={!isEditing || !hisProfile}
                                className="border-primary/50"
                            />
                            <label
                                htmlFor={field.key}
                                className="text-sm font-medium text-foreground cursor-pointer hover:text-primary transition-colors"
                            >
                                {field.label}
                            </label>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
