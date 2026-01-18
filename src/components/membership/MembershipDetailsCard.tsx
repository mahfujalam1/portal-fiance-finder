import { CreditCard } from "lucide-react";

interface MembershipData {
    accountId: string;
    membershipType: string;
    lastRenewalDate: string;
    expiryDate: string;
}


export const MembershipDetailsCard = ({ data }: { data: MembershipData }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Membership Details</h2>
            </div>

            <div className="space-y-4">
                <div className="flex items-start">
                    <span className="text-gray-800 font-medium w-48">Account ID</span>
                    <span className="text-gray-600">: {data.accountId}</span>
                </div>
                <div className="flex items-start">
                    <span className="text-gray-800 font-medium w-48">Membership Type</span>
                    <span className="text-gray-600">: {data.membershipType}</span>
                </div>
                <div className="flex items-start">
                    <span className="text-gray-800 font-medium w-48">Last Renewal Date</span>
                    <span className="text-gray-600">: {data.lastRenewalDate}</span>
                </div>
                <div className="flex items-start">
                    <span className="text-gray-800 font-medium w-48">Expiry Date</span>
                    <span className="text-gray-600">: {data.expiryDate}</span>
                </div>
            </div>
        </div>
    );
};