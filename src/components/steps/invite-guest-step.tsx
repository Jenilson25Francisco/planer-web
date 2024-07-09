import { ArrowRight, UserRoundPlus } from "lucide-react";

type InviteGuestStepProps = {
    openGuestsModal: () => void
    openConfirmTripModal: () => void
    iviteEmails: string[]
}

export function InviteGuestStep({ openGuestsModal,
    openConfirmTripModal,
    iviteEmails }:
    InviteGuestStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">

            <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1 ">
                <UserRoundPlus className="size-5 text-zinc-400" />
                {iviteEmails.length > 0 ? (
                    <span className="text-zinc-100 text-lg flex-1 text-left">
                        {iviteEmails.length} pessoa(as) convidada(as)
                    </span>
                ) : <span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viajem?</span>}
            </button>
            <div className="w-px h-6 bg-zinc-800" />

            <button
                onClick={openConfirmTripModal}
                className="bg-lime-300 hover:bg-lime-400 text-lime-950 font-medium rounded-lg flex items-center gap-2 px-5 py-2"
            >
                Confirmar viajem
                <ArrowRight className="size-5" />
            </button>
        </div>
    )
} 