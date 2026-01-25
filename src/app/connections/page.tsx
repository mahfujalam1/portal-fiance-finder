import { ProfileTabs } from '@/components/connection/profile/ProfileTabs'
import { RightSidebar } from '@/components/dashboardPage/rightSidebar/RightSidebar'
import { profiles } from '@/constant/profilesData'
import { MobileChatBar } from '@/components/chat/MobileChatBar'

function ConnectionPage() {
    return (
        <div className="pt-20">

            <div className="flex gap-6 max-w-7xl mx-auto">
                {/* Main Content */}
                <div className="w-full lg:w-[70%]">
                    <ProfileTabs profiles={profiles} />
                </div>

                {/* Right Sidebar (Tablet + Desktop only) */}
                <div className="hidden w-[30%] ms-10 lg:block sticky h-[calc(100vh-100px)] ">
                    <RightSidebar />
                </div>
            </div>

            {/* Mobile Chat Bottom */}
            <MobileChatBar />
        </div>
    )
}

export default ConnectionPage;
