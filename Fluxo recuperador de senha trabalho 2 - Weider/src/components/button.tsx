import { Link } from "react-router"
import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    disabled?: boolean
    link?: string
}

export function Button({ type = "submit", text, disabled, link, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            type={type}
            disabled={disabled}
            className={`w-full p-5 border-none rounded-lg font-archivo-semibold mt-10
                ${disabled
                    ? "bg-gray-shape text-text-complement cursor-not-allowed"
                    : "bg-green opacity-90 hover:bg-green hover:opacity-100 transition text-white cursor-pointer"
                }
            `}
        >
            {link ? (
                <Link to={link}>{text}</Link>
            ) : (
                `${text}`
            )}
        </button>
    )
}