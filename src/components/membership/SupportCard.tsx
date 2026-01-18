import { PhoneCall } from "lucide-react";

export const SupportCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                <PhoneCall className="w-12 h-12 text-white" />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
                Call to get our<br />
                valuable support anytime<br />
                24x7
            </p>
        </div>
    );
};