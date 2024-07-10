import { CircleDashed, UserCog } from "lucide-react"
import { Button } from "./button"

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
            <Button variant="secondary" size="full">
                <UserCog className="size-5" />
                Gerenciar Convidados
            </Button>
        </div>
    )
} 