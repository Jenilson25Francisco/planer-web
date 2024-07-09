import { useState, FormEvent } from "react";

import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from "lucide-react";
import Logo from "./assets/Logo.svg"

export function App() {

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOPen] = useState(false)

  const [iviteEmails, setIviteEmail] = useState([
    'franciscoviwaldo@gmail.com',
    'fulano@cicrano.com'
  ])

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

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex items-center flex-col gap-3">
          <img src={Logo} alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>
        <div className="space-y-4">
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
          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">

              <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1 ">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viajem?</span>
              </button>
              <div className="w-px h-6 bg-zinc-800" />

              <button
                className="bg-lime-300 hover:bg-lime-400 text-lime-950 font-medium rounded-lg flex items-center gap-2 px-5 py-2"
              >
                Confirmar viajem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>
        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a>
          e <a className="text-zinc-300 underline" href="#"> políticas de privacidade</a>
        </p>
      </div>

      {isGuestModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[40rem] rounded-xl px-6 py-5 shadow- bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button onClick={closeGuestsModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação na viajem
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {iviteEmails.map((email) => {
                return (
                  <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex item-center gap-8">
                    <span className="text-zinc-300">{email}</span>
                    <button type="button" onClick={() => removeEmailFromInvites(email)}>
                      <X className="size-4 text-zinc-300" />
                    </button>
                  </div>
                )
              })}
            </div>

            <div className="w-full h-px bg-zinc-800" />

            <form onSubmit={onSubmitEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <div className="px-2 flex items-center flex-1 gap-2">
                <AtSign className="text-zinc-400 size-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail do convidado"
                  className="bg-transparent text-lg placeholder-zinc-400 flex-1"
                />
              </div>
              <button
                type="submit"
                className="bg-lime-300 hover:bg-lime-400 text-lime-950 font-medium rounded-lg flex items-center gap-2 px-5 py-2"
              >
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

