import { Label } from "./label";
import { RadioGroupItem } from "./radio-group";

export const RadioItem = ({
    value,
    id,
    label,
}: {
    value: string;
    id: string;
    label: string;
}) => {
    return (
        <div className="flex items-center space-x-3">
            <RadioGroupItem
                value={value}
                id={id}
                className="border-primary text-primary"
            />
            <Label htmlFor={id} className="text-base font-medium cursor-pointer">
                {label}
            </Label>
        </div>
    );
};