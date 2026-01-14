
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface RadioSectionProps {
    title: string;
    options: { value: string; label: string }[];
    selectedValue: string;
    onValueChange: (value: string) => void;
    name: string;
}

export const RadioSection: React.FC<RadioSectionProps> = ({
    title,
    options,
    selectedValue,
    onValueChange,
    name
}) => {
    return (
        <div className="bg-white">
            <div className="px-4 py-3 bg-blue-200" >
                <h3 className="text-blue-500 font-semibold text-base">{title}</h3>
            </div>
            <div className="p-4 space-y-3">
                <RadioGroup value={selectedValue} onValueChange={onValueChange}>
                    {options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem
                                value={option.value}
                                id={`${name}-${option.value}`}
                                className="border-2"
                                style={{
                                    borderColor: '#346FB7'
                                }}
                            />
                            <Label
                                htmlFor={`${name}-${option.value}`}
                                className="text-gray-700 font-normal cursor-pointer"
                            >
                                {option.label}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </div>
    );
};