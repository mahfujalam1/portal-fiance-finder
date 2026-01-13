import { ProfileCard } from "@/components/profile/ProfileCard";
import { profiles } from "@/constant/profilesData";


export default function Profile() {
    return (
        <div className="space-y-4">
            {profiles?.slice(0,7).map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
            ))}
        </div>
    )
}
