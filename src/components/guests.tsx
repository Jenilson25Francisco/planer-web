import { CircleDashed, UserCog } from "lucide-react"

export const Guests = () => {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Covidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">
                            Silvio Fernandes
                        </span>
                        <span className="block text-sm text-zinc-400 truncate">
                            silviofernandes@gmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">
                            MAnuel Antonio
                        </span>
                        <span className="block text-sm text-zinc-400 truncate">
                            manuelantonio@hotmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>
            <button
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium rounded-lg flex items-center justify-center gap-2 px-5 h-11"
            >
                <UserCog className="size-5" />
                Gerenciar Convidados
            </button>
        </div>
    )
} 