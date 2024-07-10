import { Link2, Plus } from "lucide-react"

export const ImportantLinks = () => {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links Importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">
                            Reserva do airbnb
                        </span>
                        <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
                            https://www.airbnb.com.br/rooms/104700011
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">
                            Reserva do airbnb
                        </span>
                        <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
                            https://www.airbnb.com.br/rooms/104700011
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>
            <button
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium rounded-lg flex items-center justify-center gap-2 px-5 h-11"
            >
                <Plus className="size-5" />
                Cadastrar novo link
            </button>
        </div>
    )
}