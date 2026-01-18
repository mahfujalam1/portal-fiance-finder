import { WhyPremium } from "@/components/upgradePlan/PremiumQA";
import { PricingCard } from "@/components/upgradePlan/PricingCard";

interface PackageFeature {
    text: string;
    included: boolean;
    strikethrough?: boolean;
}

interface PricingPackage {
    name: string;
    duration: string;
    discount: string;
    originalPrice: string;
    price: string;
    features: PackageFeature[];
    highlighted?: boolean;
}

export const PricingPackages = () => {
    const packages: PricingPackage[] = [
        {
            name: 'GOLD',
            duration: '3months',
            discount: '70% OFF',
            originalPrice: '5000 bdt',
            price: '৳ 1500 bdt',
            features: [
                { text: 'Send Unlimited Message', included: true },
                { text: 'View up to 50 Contact Numbers', included: true },
                { text: 'Standout from other Profiles', included: false, strikethrough: true },
                { text: 'Contacts Matches You directly', included: false, strikethrough: true },
            ],
        },
        {
            name: 'GOLD Plus',
            duration: '6months',
            discount: '70% OFF',
            originalPrice: '8330 bdt',
            price: '৳ 2500 bdt',
            features: [
                { text: 'Send Unlimited Message', included: true },
                { text: 'View up to 100 Contact Numbers', included: true },
                { text: 'Standout from other Profiles', included: true },
                { text: 'Contacts Matches You directly', included: false, strikethrough: true },
            ],
        },
        {
            name: 'DIAMOND',
            duration: '3months',
            discount: '70% OFF',
            originalPrice: '11670 bdt',
            price: '৳ 3500 bdt',
            features: [
                { text: 'Send Unlimited Message', included: true },
                { text: 'View up to 150 Contact Numbers', included: true },
                { text: 'Standout from other Profiles', included: true },
                { text: 'Contacts Matches You directly', included: false, strikethrough: true },
            ],
        },
        {
            name: 'DIAMOND Plus',
            duration: '6months',
            discount: '70% OFF',
            originalPrice: '15000 bdt',
            price: '৳ 4500 bdt',
            features: [
                { text: 'Send Unlimited Message', included: true },
                { text: 'View up to 200 Contact Numbers', included: true },
                { text: 'Standout from other Profiles', included: true },
                { text: 'Contacts Matches You directly', included: true },
            ],
            highlighted: true,
        },
    ];

    return (
        <div className="min-h-screen px-6 mt-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center pb-10">
                    <h1 className="text-3xl font-bold bg-linear-to-r to-[#49cce9] from-[#346FB7] bg-clip-text text-transparent mt-2">
                        Upgrade NOW! & Get Premium Benefits
                    </h1>
                    <p className="text-2xl font-bold bg-linear-to-r to-[#49cce9] from-[#346FB7] bg-clip-text text-transparent">
                        At Lowest Package
                    </p>
                    <div className="w-full max-w-4xl mx-auto h-1 bg-white/30 mt-8"></div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {packages.map((pkg, index) => (
                        <PricingCard key={index} package={pkg} />
                    ))}
                </div>

                {/* Why Premium Section */}
                <WhyPremium />
            </div>
        </div>
    );
};