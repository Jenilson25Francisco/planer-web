import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

type DestinationAndDateStepsProps = {
    isGuestInputOpen: boolean
    closeGuestInput: () => void
    openGuestsInput: () => void

}

export function DestinationAndDateSteps({ isGuestInputOpen,
    closeGuestInput,
    openGuestsInput }:
    DestinationAndDateStepsProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">

            <div className="flex items-center gap-2 flex-1 ">
                <MapPin className="size-5 text-zinc-400" />
                <input
                    type="text"
                    disabled={isGuestInputOpen}
                    placeholder="Para onde voçê vai?"
                    className="bg-transparent text-lg placeholder-zinc-400 flex-1"
                />
            </div>

            <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input
                    type="text"
                    disabled={isGuestInputOpen}
                    placeholder="Quando?"
                    className="bg-transparent text-lg placeholder-zinc-400"
                />
            </div>

            <div className="w-px h-6 bg-zinc-800" />
            {
                isGuestInputOpen ? (
                    <button
                        onClick={closeGuestInput}
                        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium rounded-lg flex items-center gap-2 px-5 py-2"
                    >
                        Alterar local/data
                        <Settings2 className="size-5" />
                    </button>
                ) : (
                    <button
                        onClick={openGuestsInput}
                        className="bg-lime-300 hover:bg-lime-400 text-lime-950 font-medium rounded-lg flex items-center gap-2 px-5 py-2"
                    >
                        Continuar
                        <ArrowRight className="size-5" />
                    </button>
                )
            }
        </div>
    )
}