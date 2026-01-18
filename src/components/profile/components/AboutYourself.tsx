"use client"

import { useState } from "react"
import { Edit2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AboutSectionProps {
    title: string
    content: string
    hisProfile?: boolean
    onSave?: (content: string) => void
}

export function AboutSection({ title, content, hisProfile = false, onSave }: AboutSectionProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedContent, setEditedContent] = useState(content)

    const handleSave = () => {
        console.log("Saving about content:", editedContent)
        onSave?.(editedContent)
        setIsEditing(false)
    }

    return (
        <Card className="border border-border hover:border-primary/50 transition-colors p-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
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
                {isEditing && hisProfile ? (
                    <Textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        className="h-full border-primary/30 focus:border-primary resize-none"
                    />
                ) : (
                    <p className="text-sm leading-relaxed text-foreground/90">{editedContent}</p>
                )}
            </CardContent>
        </Card>
    )
}
