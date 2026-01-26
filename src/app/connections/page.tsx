import { RightSidebar } from '@/components/dashboardPage/rightSidebar/RightSidebar'
import { MobileChatBar } from '@/components/chat/MobileChatBar'
import { ProfileTabs } from '@/components/connection/profile/ProfileTabs';
import { profiles } from '@/constant/profilesData';

function Search() {
    return (
        <div className="max-w-7xl mx-auto pt-20 min-h-screen">

            <div className="flex gap-6">

                {/* Main Content */}
                <div className="w-full lg:w-[70%]">
                    <ProfileTabs profiles={profiles} />
                </div>

                {/* Right Sidebar (Tablet + Desktop only) */}
                <div className="hidden lg:block w-[30%] sticky top-20 h-[calc(100vh-100px)]">
                    <div className='ms-14'>
                        <RightSidebar />
                    </div>
                </div>

            </div>

            {/* Mobile Chat Bottom */}
            <MobileChatBar />
        </div>
    )
}

export default Search;
