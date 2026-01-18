import { Button } from '@/components/ui/button'
import { SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Bell, CreditCard, Lock, LogOut, Menu, Settings, Sheet, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

function MobileNavbar() {
    const router = useRouter()
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="w-5 h-5" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="left" className="w-[300px] p-0">
                    <div className="flex flex-col h-full">
                        {/* Profile Section */}
                        <div className="p-6 border-b bg-gradient-to-r from-pink-50 to-blue-50">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative w-12 h-12">
                                    <svg className="w-12 h-12" viewBox="0 0 36 36">
                                        <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                                        <circle cx="18" cy="18" r="16" fill="none" stroke="#d91c5c" strokeWidth="3" strokeDasharray="100" strokeDashoffset="12" strokeLinecap="round" transform="rotate(-90 18 18)" />
                                    </svg>
                                    <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">88%</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Profile Completed</p>
                                    <p className="text-xs text-gray-500">Account Type: Free</p>
                                </div>
                            </div>
                            <button
                                onClick={() => router.push("/upgrade")}
                                className="w-full bg-[#c7236e] hover:bg-[#a91d5a] text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
                            >
                                Upgrade Now
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="space-y-3">
                                <div
                                    onClick={() => router.push("/")}
                                    className="text-sm font-medium cursor-pointer hover:text-primary transition-colors py-2"
                                >
                                    Dashboard
                                </div>
                                <div
                                    onClick={() => router.push("/connections")}
                                    className="text-sm font-medium cursor-pointer hover:text-primary transition-colors py-2"
                                >
                                    Connections
                                </div>
                                <div
                                    onClick={() => router.push("/search")}
                                    className="text-sm font-medium cursor-pointer hover:text-primary transition-colors py-2"
                                >
                                    Search
                                </div>
                            </div>

                            <div className="border-t my-4"></div>

                            {/* Profile Menu Items */}
                            <div className="space-y-3">
                                <div
                                    onClick={() => router.push("/profile")}
                                    className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors py-2"
                                >
                                    <User className="w-5 h-5 text-primary" />
                                    <span className="text-sm text-gray-700">My Profile</span>
                                </div>

                                <div
                                    onClick={() => router.push("/notifications")}
                                    className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors py-2"
                                >
                                    <Bell className="w-5 h-5 text-primary" />
                                    <span className="text-sm text-gray-700">Notifications</span>
                                </div>

                                <div
                                    onClick={() => router.push("/membership")}
                                    className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors py-2"
                                >
                                    <CreditCard className="w-5 h-5 text-primary" />
                                    <span className="text-sm text-gray-700">Membership Info</span>
                                </div>

                                <div
                                    onClick={() => router.push("/account-settings")}
                                    className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors py-2"
                                >
                                    <Settings className="w-5 h-5 text-primary" />
                                    <span className="text-sm text-gray-700">Account Settings</span>
                                </div>

                                <div
                                    onClick={() => router.push("/privacy")}
                                    className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors py-2"
                                >
                                    <Lock className="w-5 h-5 text-primary" />
                                    <span className="text-sm text-gray-700">Privacy Settings</span>
                                </div>

                                <div
                                    onClick={() => {/* Add logout logic */ }}
                                    className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors py-2"
                                >
                                    <LogOut className="w-5 h-5 text-primary" />
                                    <span className="text-sm text-gray-700">Logout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavbar