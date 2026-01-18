import { Button } from "@/components/ui/button";
import { UserX2 } from "lucide-react";

export const DeactivateAccount = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#346FB7] flex items-center justify-center">
                    <UserX2 className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">De-activate Account</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            </p>

            <Button >
                De-activate Account
            </Button>
        </div>
    );
};