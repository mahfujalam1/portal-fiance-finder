import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface ProfileFiltersProps {
    hideAddedProfiles: boolean;
    hideBlockedProfiles: boolean;
    onToggleAdded: (checked: boolean) => void;
    onToggleBlocked: (checked: boolean) => void;
}

export const ProfileFilters: React.FC<ProfileFiltersProps> = ({
    hideAddedProfiles,
    hideBlockedProfiles,
    onToggleAdded,
    onToggleBlocked
}) => {
    return (
        <div className="mt-8 flex flex-col items-end gap-4">
            <h1 className="text-red-500 text-md">Don not show</h1>
            <div className="flex items-center space-x-2">
                
                <Checkbox
                    id="hide-added"
                    checked={hideAddedProfiles}
                    onCheckedChange={(checked) => onToggleAdded(checked as boolean)}
                />
                <Label htmlFor="hide-added" className="text-gray-700 cursor-pointer">
                    Added Profiles
                </Label>
            </div>

            <div className="flex items-center space-x-2">
            
                <Checkbox
                    id="hide-blocked"
                    checked={hideBlockedProfiles}
                    onCheckedChange={(checked) => onToggleBlocked(checked as boolean)}
                />
                <Label htmlFor="hide-blocked" className="text-gray-700 cursor-pointer">
                    Blocked Profiles
                </Label>
            </div>
        </div>
    );
};