import { Check, Heart, Shield } from "lucide-react";

export const WhyPremium = () => {
    const benefits = [
        'Talk To matches directly',
        'Get complete profile details',
        'Enhanced profile visibility',
        'Get more responses',
        'Guaranteed profile match',
    ];

    return (
        <div className="bg-white rounded-xl shadow-md py-12 px-8 text-center">
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <Shield className="w-24 h-24 text-gray-400" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-primary rounded-full px-6 py-2">
                            <p className="text-white font-bold text-sm">MATCH</p>
                        </div>
                        <div className="bg-primary rounded-full px-4 py-1 mt-1">
                            <p className="text-white font-bold text-xs">GUARANTEE</p>
                        </div>
                        <Heart className="w-6 h-6 text-white absolute -bottom-2 left-1/2 transform -translate-x-1/2" />
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-8">
                Why Premium Membership?
            </h2>

            <div className="border-t-2 border-primary/20 pt-8 space-y-4 max-w-md mx-auto">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <p className="text-gray-800 text-lg text-left">{benefit}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};