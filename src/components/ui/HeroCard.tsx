
import { Button } from './button' 
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar' 
import { IMAGES } from '@/constant/image.index'
import { ProfileData } from '@/types/profile'

export const ProfileCard = ({ profile }: { profile: ProfileData }) => (
    <div className="flex-shrink-0 w-full md:w-1/2 px-3">
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm h-full">
            <div className="flex gap-4 mb-4">
                <Avatar className="w-20 h-20">
                    <AvatarImage
                        src={IMAGES.profile2.src}
                        className="rounded-md"
                    />
                </Avatar>

                <div>
                    <h3 className="font-bold text-[#346FB7]">{profile.name}</h3>
                    <p className="text-sm text-gray-600">ID: SH7910202029</p>

                    <div className="mt-2 space-y-1 text-sm">
                        <p><span className="font-semibold">Age</span>: {profile.age}</p>
                        <p><span className="font-semibold">Religion</span>: {profile.religion}</p>
                        <p><span className="font-semibold">Marital Status</span>: {profile.maritalStatus}</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-3">
                <Button className="flex-1">ACCEPT</Button>
                <Button variant="outline" className="flex-1">REJECT</Button>
            </div>
        </div>
    </div>
)
