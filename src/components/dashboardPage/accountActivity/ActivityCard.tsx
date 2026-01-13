import type { ReactNode } from "react"

interface ActivityCardProps {
    number?: string | number
    label: string
    icon?: ReactNode
}

export function ActivityCard({ number, label, icon }: ActivityCardProps) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-105 duration-500 transition-all">
            <div className="flex flex-col items-center gap-3">
                {number !== undefined ? (
                    <div className="text-3xl font-bold text-[#346FB7]">{number}</div>
                ) : icon ? (
                    <div className="text-3xl text-[#346FB7]">{icon}</div>
                ) : null}
                <p className="text-center text-sm text-[#346FB7]">{label}</p>
            </div>
        </div>
    )
}