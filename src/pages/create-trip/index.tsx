import { useState, FormEvent } from "react";

import Logo from "../../assets/Logo.svg"
import { useNavigate } from "react-router-dom";
import { InviteGuestModal } from "../../components/invite-guest-modal";
import { ConfirmTripModal } from "../../components/confirm-trip-modal";
import { DestinationAndDateSteps } from './../../components/steps/destination-and-date';
import { InviteGuestStep } from "../../components/steps/invite-guest-step";

export function CreateTripPage() {

    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
    const [isGuestModalOpen, setIsGuestModalOPen] = useState(false)
    const [confirmTripModalOpen, setConfirmTripModalOpen] = useState(false)

    const [iviteEmails, setIviteEmail] = useState([
        'franciscoviwaldo@gmail.com',
        'fulano@cicrano.com'
    ])

    const navigate = useNavigate()

    function openGuestsInput() {
        setIsGuestInputOpen(true)
    }

    function closeGuestInput() {
        setIsGuestInputOpen(false)
    }

    function openGuestsModal() {
        setIsGuestModalOPen(true)
    }

    function closeGuestsModal() {
        setIsGuestModalOPen(false)
    }

    function openConfirmTripModal() {
        setConfirmTripModalOpen(true)
    }

    function closeconfirmTripModal() {
        setConfirmTripModalOpen(false)
    }

    function onSubmitEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (iviteEmails.includes('email')) {
            return
        }

        setIviteEmail([
            ...iviteEmails,
            email
        ])

        event.currentTarget.reset()

    }

    function removeEmailFromInvites(emailToRemove: string) {
        const newEmailList = iviteEmails.filter(email => email !== emailToRemove)
        setIviteEmail(newEmailList)
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault
        navigate("/trip/123")
    }

    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className="flex items-center flex-col gap-3">
                    <img src={Logo} alt="plann.er" />
                    <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>
                <div className="space-y-4">
                    <DestinationAndDateSteps
                        closeGuestInput={closeGuestInput}
                        isGuestInputOpen={isGuestInputOpen}
                        openGuestsInput={openGuestsInput}
                    />
                    {isGuestInputOpen && (
                        <InviteGuestStep
                            iviteEmails={iviteEmails}
                            openConfirmTripModal={openConfirmTripModal}
                            openGuestsModal={openGuestsModal}
                        />
                    )}
                </div>
                <p className="text-zinc-500 text-sm">
                    Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
                    com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a>
                    e <a className="text-zinc-300 underline" href="#"> políticas de privacidade</a>
                </p>
            </div>

            {isGuestModalOpen && (
                <InviteGuestModal
                    iviteEmails={iviteEmails}
                    onSubmitEmailToInvite={onSubmitEmailToInvite}
                    closeGuestsModal={closeGuestsModal}
                    removeEmailFromInvites={removeEmailFromInvites}
                />
            )}

            {confirmTripModalOpen && (
                <ConfirmTripModal
                    closeconfirmTripModal={closeconfirmTripModal}
                    createTrip={createTrip}
                />
            )}
        </div>
    )
}


