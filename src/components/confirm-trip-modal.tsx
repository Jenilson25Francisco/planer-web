import { AtSign, User, X } from "lucide-react";
import { FormEvent } from "react";

type ConfirmTripModalProps = {
    closeconfirmTripModal: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({ closeconfirmTripModal, createTrip }: ConfirmTripModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[40rem] rounded-xl px-6 py-5 shadow- bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Confirmar criação de viajem</h2>
                        <button onClick={closeconfirmTripModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Para concluir a criação da viagem para

                        <span className="font-semibold text-zinc-100">
                            Florianópolis, Brasil
                        </span> nas datas de
                        <span className="font-semibold text-zinc-100">
                            16 a 27 de Agosto de 2024
                        </span> preencha seus dados abaixo:
                    </p>
                </div>

                <form onSubmit={createTrip} className="space-y-3" >
                    <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <User className="text-zinc-400 size-5" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Digite o nome do usuário"
                            className="bg-transparent text-lg placeholder-zinc-400 flex-1"
                        />
                    </div>
                    <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <AtSign className="text-zinc-400 size-5" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu email pessoal"
                            className="bg-transparent text-lg placeholder-zinc-400 flex-1"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-lime-300 w-full justify-center hover:bg-lime-400 text-lime-950 font-medium rounded-lg flex items-center gap-2 px-5 h-10"
                    >
                        Confirmar criação da viajem

                    </button>
                </form>
            </div>
        </div>
    )
}