import { useState } from 'react';

import { CreateActivityModal } from '../../components/create-activity-modal';
import { ImportantLinks } from '../../components/important-links';
import { Guests } from './../../components/guests';
import { Activities } from '../../components/activities';
import { DestinationAndDateHeader } from '../../components/destination-and-date-header';

export function TripDetails() {

    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

    function openActivityModal() {
        setIsCreateActivityModalOpen(true)
    }

    function closeActivityModal() {
        setIsCreateActivityModalOpen(false)
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinationAndDateHeader />
            <main className="flex gap-16 px-4">
                <Activities openActivityModal={openActivityModal} />
                <div className="w-80 space-y-6">
                    <ImportantLinks />
                    <div className="w-full h-px bd-zinc-800" />
                    <Guests />
                </div>
            </main>
            {isCreateActivityModalOpen && (
                <CreateActivityModal closeActivityModal={closeActivityModal} />
            )}
        </div>
    )
}