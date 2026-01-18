import { Checkbox } from "./checkbox";
import { Label } from "./label";

export const CheckboxItem = ({
    id,
    label,
    description,
    checked,
    onCheckedChange,
}: {
    id: string;
    label: string;
    description: string;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
}) => {
    return (
        <div className="flex items-start space-x-3">
            <Checkbox
                id={id}
                checked={checked}
                onCheckedChange={onCheckedChange}
                className="mt-1 border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <div className="flex-1">
                <Label
                    htmlFor={id}
                    className="text-base font-semibold text-gray-900 cursor-pointer"
                >
                    {label}
                </Label>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
        </div>
    );
};