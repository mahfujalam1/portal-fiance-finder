
import { Button } from '@/components/ui/button';
import { FeatureItem } from './FeatureItem';

// Types
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

export const PricingCard = ({ package: pkg }: { package: PricingPackage }) => {
    return (
        <div
            className="rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-white group"
        >
            {/* Header */}
            <div className="py-6 px-6 bg-gradient-to-r from-white to-gray-50 group-hover:bg-gradient-to-br group-hover:from-[#65CBE2] group-hover:to-[#346FB7] transition-all duration-500">
                <h3 className="text-2xl font-bold text-center text-gray-600 group-hover:text-white">
                    {pkg.name}
                </h3>
            </div>

            {/* Pricing Section */}
            <div className="py-6 px-6 bg-primary group-hover:bg-white transition-all duration-500">
                <div className="text-center text-white group-hover:text-primary transition-colors duration-500">
                    <p className="text-lg font-semibold mb-2">{pkg.duration}</p>
                    <div className="mb-2">
                        <span className="text-xl font-bold">{pkg.discount}</span>
                        <span className="text-sm ml-2 line-through opacity-80">
                            {pkg.originalPrice}
                        </span>
                    </div>
                    <p className="text-3xl font-bold">{pkg.price}</p>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-8 px-6 space-y-4 bg-white group-hover:bg-gradient-to-br group-hover:from-[#65CBE2] group-hover:to-[#346FB7] transition-all duration-500">
                {pkg.features.map((feature, index) => (
                    <FeatureItem key={index} feature={feature} />
                ))}
            </div>

            {/* CTA Button */}
            <div className="py-6 px-6 bg-white group-hover:bg-gradient-to-br group-hover:from-[#65CBE2] group-hover:to-[#346FB7] transition-all duration-500">
                <Button
                    variant="default"
                    className="w-full text-lg"
                >
                    Pay Now
                </Button>
            </div>
        </div>
    );
};