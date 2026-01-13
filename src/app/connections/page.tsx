
import { ProfileTabs } from '@/components/connection/profile/ProfileTabs'
import { RightSidebar } from '@/components/dashboardPage/rightSidebar/RightSidebar'
import { profiles } from '@/constant/profilesData'

function ConnectionPage() {
    return (
        <div className='flex max-w-7xl mx-auto pt-20 min-h-screen py-20'>
            <div className='w-3/4'>
                <ProfileTabs profiles={profiles} />
            </div>
            <div className='fixed right-1/12 top-18 w-[270px]'>
                <RightSidebar />
            </div>
        </div>
    )
}

export default ConnectionPage