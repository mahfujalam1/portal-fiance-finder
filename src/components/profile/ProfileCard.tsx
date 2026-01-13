import Image from "next/image"
import { MessageCircle, Star, UserPlus } from "lucide-react"
import { ActionButton } from "./ActionButton"
import Link from "next/link"

interface Profile {
    id: string
    name: string
    age: number
    height: string
    bloodGroup: string
    city: string
    religion: string
    maritalStatus: string
    about: string
    image: string
}

export function ProfileCard({ profile }: { profile: Profile }) {
    return (
        <div className="flex gap-4 bg-white rounded-md  shadow-md border border-[#65CBE2]/40">
            {/* Image */}
            <div className="relative w-48 h-60 shrink-0 rounded-xl overflow-hidden">
                <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover p-2 rounded-xl"
                />
            </div>

            {/* Content */}
            <div className="flex-1 p-4 w-3/4">
                {/* Header */}
                <div className="flex gap-3 items-center mb-2">
                    <h3 className="text-lg font-semibold text-[#346FB7]">
                        {profile.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                        ID: {profile.id}
                    </span>
                </div>

                {/* Info grid */}
                <div className="flex gap-5">
                    <div>
                        <p><span className="font-medium">Age</span> : {profile.age}</p>
                        <p><span className="font-medium">City</span> : {profile.city}</p>
                        <p><span className="font-medium">Height</span> : {profile.height}</p>
                    </div>
                    <div className="border-l-2 border border-gray-200" />
                    <div>
                        <p><span className="font-medium">Religion</span> : {profile.religion}</p>
                        <p><span className="font-medium">Blood Group</span> : {profile.bloodGroup}</p>
                        <p><span className="font-medium">Marital Status</span> : {profile.maritalStatus}</p>
                    </div>
                </div>

                

                {/* About */}
                <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                    <span className="font-medium text-[#346FB7]">About:</span>{" "}
                    {profile.about}
                </p>
                {/* Link */}
                <Link href={'/'} className="text-sm text-blue-400">
                    View Full Profile
                </Link>
            </div>
            <div className="w-1/4">
                <div className="flex flex-col gap-4 items-center justify-center h-full my-auto ps-5">
                    <ActionButton icon={<MessageCircle size={14} />} label="Message" />
                    <ActionButton icon={<Star size={14} />} label="Shortlist" />
                    <ActionButton icon={<UserPlus size={14} />} label="Connect" />
                </div>
            </div>
        </div>
    )
}
