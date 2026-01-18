import { DeleteAccount } from '@/components/accountSettings/DeleteAccount'
import ContactDetails from '@/components/accountSettings/modal/ContactDetails'
import { DeactivateAccount } from '@/components/accountSettings/modal/DeactivateAccount'
import React from 'react'

function page() {
    return (
        <div className=" p-6 mt-16">
            <div className="max-w-7xl mx-auto space-y-6">
                <ContactDetails />
                <DeactivateAccount />
                <DeleteAccount/>
            </div>
        </div>
    )
}

export default page