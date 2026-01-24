
import ProfileContent from "@/components/dashboardPage/profile/ProfileContent";
import { Suspense } from "react";

export default function Profile() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProfileContent />
        </Suspense>
    );
}
