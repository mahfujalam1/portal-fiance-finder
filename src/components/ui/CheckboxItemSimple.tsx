import { Checkbox } from "./checkbox";
import { Label } from "./label";

export const CheckboxItemSimple = ({
    id,
    label,
    checked,
    onCheckedChange,
}: {
    id: string;
    label: string;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
}) => {
    return (
        <div className="flex items-center space-x-3">
            <Checkbox
                id={id}
                checked={checked}
                onCheckedChange={onCheckedChange}
                className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label
                htmlFor={id}
                className="text-base font-medium cursor-pointer"
            >
                {label}
            </Label>
        </div>
    );
};