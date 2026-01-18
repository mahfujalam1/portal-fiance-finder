import { Button } from "../ui/button";

export const NotificationSettingsCard = ({
    title,
    children,
    onSave,
}: {
    title: string;
    children: React.ReactNode;
    onSave: () => void;
}) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
            {children}
            <Button
                onClick={onSave}
                variant="default"
            >
                Save
            </Button>
        </div>
    );
};