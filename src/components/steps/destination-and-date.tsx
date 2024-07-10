import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { VariantProps } from 'tailwind-variants';
import { Button } from "../button";

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

                    <Button onClick={closeGuestInput} variant="secondary">
                        Alterar local/data
                        <Settings2 className="size-5" />
                    </Button>
                ) : (

                    <Button onClick={openGuestsInput} variant="primary">
                        Continuar
                        <ArrowRight className="size-5" />
                    </Button>
                )
            }
        </div>
    )
}