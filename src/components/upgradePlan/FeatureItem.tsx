
import { Check, X,} from 'lucide-react';

// Types
interface PackageFeature {
    text: string;
    included: boolean;
    strikethrough?: boolean;
}


// Feature Item Component
export const FeatureItem = ({ feature }: { feature: PackageFeature }) => {
    return (
        <div className="flex items-center gap-3">
            {feature.included ? (
                <div className="flex-shrink-0 w-5 h-5 rounded bg-primary/20 group-hover:bg-white flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                </div>
            ) : (
                <div className="flex-shrink-0 w-5 h-5 rounded bg-red-100 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-500" />
                </div>
            )}
            <span
                className={`text-sm ${feature.strikethrough
                        ? 'line-through text-gray-500 group-hover:text-white'
                        : 'text-gray-800 group-hover:text-white'
                    }`}
            >
                {feature.text}
            </span>
        </div>
    );
};