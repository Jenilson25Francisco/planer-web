import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    children: ReactNode
}

const buttonVariants = tv({
    base: "font-medium rounded-lg flex items-center justify-center gap-2 px-5 py-2",
    variants: {
        variant: {
            primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
            secondary: "bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
        },
        size: {
            default: 'py-2',
            full: 'w-full h-11'
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={buttonVariants({ variant, size })}
        >
            {children}

        </button>
    )
}