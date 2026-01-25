import { ContactNumberCountCard } from "@/components/membership/ContactNumberCountCard";
import { MembershipDetailsCard } from "@/components/membership/MembershipDetailsCard";
import { SupportCard } from "@/components/membership/SupportCard";

interface MembershipData {
    accountId: string;
    membershipType: string;
    lastRenewalDate: string;
    expiryDate: string;
}

interface ContactCountData {
    totalCounts: number;
    remainingCounts: number;
}

const membershipData: MembershipData = {
    accountId: 'SH79102029',
    membershipType: 'GOLD Plus',
    lastRenewalDate: '1st April 2022',
    expiryDate: '2nd September 2022',
};

const contactCountData: ContactCountData = {
    totalCounts: 100,
    remainingCounts: 93,
};

export const MyAccount = () => {
    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-primary mb-8">My Account</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div>
                        <MembershipDetailsCard data={membershipData} />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <ContactNumberCountCard data={contactCountData} />
                        <SupportCard />
                    </div>
                </div>
            </div>
        </div>
    );
};