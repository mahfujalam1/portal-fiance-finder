import { EXTENDED_FIELDS } from "@/constant/searchOptions";
import { SelectField } from "../ui/SelectField";

interface ExtendedFiltersProps {
    filters: SearchFilters;
    onFilterChange: (key: keyof SearchFilters, value: string) => void;
}

export const ExtendedFilters: React.FC<ExtendedFiltersProps> = ({ filters, onFilterChange }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200">
            {EXTENDED_FIELDS.map((config) => (
                <SelectField
                    key={config.id}
                    config={config}
                    value={filters[config.key] as string}
                    onChange={onFilterChange}
                />
            ))}
        </div>
    );
};