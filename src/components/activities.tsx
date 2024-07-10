import { Plus, CircleCheck } from "lucide-react"

type ActivitiesProp = {
    openActivityModal: () => void
}

export const Activities = ({ openActivityModal }: ActivitiesProp) => {
    return (
        <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-semibold">Atividades</h2>
                <button
                    onClick={openActivityModal}
                    className="bg-lime-300 hover:bg-lime-400 text-lime-950 font-medium rounded-lg flex items-center gap-2 px-5 py-2"
                >
                    <Plus className="size-5" />
                    Cadastrar Atividade
                </button>
            </div>
            <div className="space-y-8">
                <div className="space-y-2.5">
                    <div className="flex gap-2 items-baseline">
                        <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                        <span className="text-xs text-zinc-500">Sábado</span>
                    </div>
                    <p className="text-zinc-500 tex-sm">
                        Nenhuma atividade cadastrada nesta data
                    </p>
                </div>
                <div className="space-y-2.5">
                    <div className="flex gap-2 items-baseline">
                        <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                        <span className="text-xs text-zinc-500">Domingo</span>
                    </div>
                    <div className="space-y-2.5">
                        <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape">
                            <CircleCheck className="size-5 tex-lime-300" />
                            <span className="text-zinc-100">Acamdemia em grupo</span>
                            <span className="text-zinc-400 text-sm ml-auto">8 horas</span>
                        </div>
                    </div>
                    <div className="space-y-2.5">
                        <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape">
                            <CircleCheck className="size-5 tex-lime-300" />
                            <span className="text-zinc-100">Acamdemia em grupo</span>
                            <span className="text-zinc-400 text-sm ml-auto">8 horas</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}