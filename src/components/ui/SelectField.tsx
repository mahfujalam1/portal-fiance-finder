
import React from 'react';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';


interface SelectFieldProps {
    config: SelectFieldConfig;
    value: string;
    onChange: (key: keyof SearchFilters, value: string) => void;
}

export const SelectField: React.FC<SelectFieldProps> = ({ config, value, onChange }) => {
    return (
        <div className="space-y-2">
            <Label htmlFor={config.id} className="text-gray-700 font-medium">
                {config.label}
            </Label>
            <Select value={value} onValueChange={(val) => onChange(config.key, val)}>
                <SelectTrigger id={config.id} className="h-11 w-full">
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                    {config.options.map(opt => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};