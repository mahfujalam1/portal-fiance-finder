export function SectionHeader({ title }: { title: string }) {
    return (
        <div className="w-full bg-white rounded-lg px-6 py-4 shadow">
            {/* Title */}
            <div className="text-center mb-3">
                <h2 className="text-xl font-semibold text-[#346FB7]">
                    {title}
                </h2>
            </div>

            {/* Border line */}
            <div className="relative">
                {/* Full border */}
                <div className="h-0.5 w-full bg-[#65CBE2]/70" />

                {/* Center colored border */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-40 bg-[#346FB7]" />
            </div>
        </div>
    )
}
