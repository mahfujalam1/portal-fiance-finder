export function ActionButton({
    icon,
    label,
}: {
    icon: React.ReactNode
    label: string
}) {
    return (
        <button className="flex items-center gap-1 px-3 py-1 text-sm border border-[#346FB7] text-[#346FB7] rounded-md hover:bg-[#346FB7] hover:text-white cursor-pointer transition">
            {icon}
            {label}
        </button>
    )
}
