import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { SelectField } from "../ui/SelectField";
import { BASIC_FIELDS } from "@/constant/searchOptions";

interface BasicFiltersProps {
    filters: SearchFilters;
    onFilterChange: (key: keyof SearchFilters, value: string) => void;
    showMoreOptions: boolean;
    setShowMoreOptions: (show: boolean) => void;
}

export const BasicFilters: React.FC<BasicFiltersProps> = ({
    filters,
    onFilterChange,
    showMoreOptions,
    setShowMoreOptions
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BASIC_FIELDS?.map((config) => (
                <SelectField
                    key={config.id}
                    config={config}
                    value={filters[config.key] as string}
                    onChange={onFilterChange}
                />
            ))}

            <div className="flex items-end justify-end">
                <Button
                    variant="ghost"
                    onClick={() => setShowMoreOptions(!showMoreOptions)}
                    className="text-blue-400 font-semibold gap-2"
                >
                    {showMoreOptions ? 'Less options' : 'More options'}
                    <ChevronUp className={`w-5 h-5 transition-transform ${showMoreOptions ? '' : 'rotate-180'}`} />
                </Button>
            </div>
        </div>
    );
};