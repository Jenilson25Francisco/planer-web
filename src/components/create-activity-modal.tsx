import { Calendar, Tag, X } from "lucide-react"
import { Button } from "./button"

type CreateActivityModalProps = {
    closeActivityModal: () => void
}

export const CreateActivityModal = ({ closeActivityModal }: CreateActivityModalProps) => {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[40rem] rounded-xl px-6 py-5 shadow- bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Confirmar criação de viajem</h2>
                        <button onClick={closeActivityModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Todos os convidados podem visualizar as atividades
                    </p>
                </div>

                <form className="space-y-3" >
                    <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <Tag className="text-zinc-400 size-5" />
                        <input
                            type="text"
                            name="title"
                            placeholder="Qual é atividade?"
                            className="bg-transparent text-lg placeholder-zinc-400 flex-1"
                        />
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                            <Calendar className="text-zinc-400 size-5" />
                            <input
                                type="datetime-local"
                                name="occurs_at"
                                placeholder="Data e horário da atividade"
                                className="bg-transparent text-lg placeholder-zinc-400 flex-1 [color-scheme:dark]"
                            />
                        </div>
                    </div>
                    <Button variant="primary" size="full">
                        Cadastrar atividade
                    </Button>
                </form>
            </div>
        </div>
    )
}