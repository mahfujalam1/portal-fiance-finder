
import {
    DropdownMenuContent,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { Bell, CreditCard, Lock, LogOut, Settings, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

function Dropdown() {
    const router = useRouter()

    return (
        <DropdownMenuContent className="w-full p-0 mt-5" align="end">
            {/* Profile Completion */}
            <div className="p-3">
                <div className="flex items-center justify-center gap-3">
                    <div className="relative w-12 h-12">
                        <svg className="w-12 h-12" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#346FB7" strokeWidth="3" strokeDasharray="100" strokeDashoffset="12" strokeLinecap="round" transform="rotate(-90 18 18)" />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">88%</span>
                    </div>
                    <span className="text-sm text-gray-600">Profile Completed</span>
                </div>
            </div>

            <div className="border-t border-gray-200"></div>

            {/* Menu Items - 2 columns */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 p-6">
                {/* Left Column */}
                <div
                    onClick={() => router.push("/profile")}
                    className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
                >
                    <User className="w-5 h-5 text-primary" />
                    <span className="text-sm text-gray-700">My Profile</span>
                </div>

                <div
                    onClick={() => router.push("/account-settings")}
                    className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
                >
                    <Settings className="w-5 h-5 text-primary" />
                    <span className="text-sm text-gray-700">Account Settings</span>
                </div>

                <div
                    onClick={() => router.push("/notifications")}
                    className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
                >
                    <Bell className="w-5 h-5 text-primary" />
                    <span className="text-sm text-gray-700">Notifications</span>
                </div>

                <div
                    onClick={() => router.push("/privacy-settings")}
                    className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
                >
                    <Lock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-gray-700">Privacy Settings</span>
                </div>

                <div
                    onClick={() => router.push("/membership")}
                    className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
                >
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span className="text-sm text-gray-700">Membership Info</span>
                </div>

                <div
                    onClick={() => {/* Add logout logic */ }}
                    className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
                >
                    <LogOut className="w-5 h-5 text-primary" />
                    <span className="text-sm text-gray-700">Logout</span>
                </div>
            </div>

            <div className="border-t border-gray-200"></div>

            {/* Account Type & Upgrade */}
            <div className="p-6 pt-4 text-center">
                <p className="text-xs text-gray-500 text-center pb-1">Account Type: Free</p>
                <Button onClick={() => router.push("/upgrade-plan")} variant={'default'}>Upgrade Now</Button>
            </div>
        </DropdownMenuContent>
    )
}

export default Dropdown