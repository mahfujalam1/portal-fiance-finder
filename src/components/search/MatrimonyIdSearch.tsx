import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface MatrimonyIdSearchProps {
    matrimonyId: string;
    setMatrimonyId: (id: string) => void;
    onSearch: () => void;
}

export const MatrimonyIdSearch: React.FC<MatrimonyIdSearchProps> = ({ matrimonyId, setMatrimonyId, onSearch }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Label htmlFor="matrimony-id" className="text-gray-800 font-semibold text-base whitespace-nowrap">
                    Matrimony ID
                </Label>
                <Input
                    id="matrimony-id"
                    type="text"
                    placeholder="Write ID here"
                    value={matrimonyId}
                    onChange={(e) => setMatrimonyId(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                    className="flex-1 h-11"
                />
                <Button
                    onClick={onSearch}
                    variant={'default'}
                    className="py-2"
                >
                    SEARCH
                </Button>
            </div>
        </div>
    );
};