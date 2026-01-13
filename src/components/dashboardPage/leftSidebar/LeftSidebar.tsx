"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/constant/image.index"
import { Edit } from "lucide-react"
import Image from "next/image"

export function LeftSidebar() {
    return (
        <div className="w-full scrollbar-hide">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-[#346FB7] font-bold text-lg mb-6 pb-3 border-b-2 border-[#65CBE2]">Basic Information</h2>

                {/* Profile Image */}
                <div className="flex justify-center mb-6 w-full">
                    <div className="">
                        <Image className="rounded-md" height={200} width={200} alt="profile" src={IMAGES.profile2.src} />
                    </div>
                </div>

                {/* Profile Name */}
                <div className="text-center mb-6">
                    <h3 className="font-bold text-gray-800">Imran Hossain Shaon</h3>
                    <p className="text-sm text-gray-600">ID: SH7910202029</p>
                    <Button variant="outline" size="sm" className="mt-3 text-gray-600 hover:text-[#346FB7] bg-transparent">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                    </Button>
                </div>

                {/* Account Information */}
                <div className="space-y-4">
                    <div>
                        <label className="font-bold text-[#346FB7] block mb-1">Account For</label>
                        <p className="text-sm text-gray-700">Self</p>
                    </div>

                    <div>
                        <label className="font-bold text-[#346FB7] block mb-1">Account Type</label>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">Free</span>
                            <Badge variant="secondary">Upgrade</Badge>
                        </div>
                    </div>

                    <div>
                        <label className="font-bold text-[#346FB7] block mb-1">Account Verification</label>
                        <p className="text-sm text-gray-700">Verify Mobile Number</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
