import { Phone } from "lucide-react";

interface ContactCountData {
    totalCounts: number;
    remainingCounts: number;
}

export const ContactNumberCountCard = ({ data }: { data: ContactCountData }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Contact Number Count</h2>
            </div>

            <div className="space-y-4">
                <div className="flex items-start">
                    <span className="text-gray-800 font-medium w-48">Total Counts</span>
                    <span className="text-gray-600">: {data.totalCounts}</span>
                </div>
                <div className="flex items-start">
                    <span className="text-gray-800 font-medium w-48">Remaining Counts</span>
                    <span className="text-gray-600">: {data.remainingCounts}</span>
                </div>
            </div>
        </div>
    );
};