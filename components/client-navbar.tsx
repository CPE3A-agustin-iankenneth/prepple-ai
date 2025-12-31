import { LogoutButton } from "./logout-button"
import LogoIcon from "@/public/logo-icon.svg"
import Image from "next/image"
import { ThemeSwitcher } from "./theme-switcher"

export default function ClientNavbar({ name }: { name: string | any }) {
    return (
        <nav className="shadow-md sticky top-0 md:block border-b md:border md:rounded-full md:w-5xl w-full">
            <div className="flex items-center justify-between px-8 py-4 md:px-16 md:py-4">
                <div className="flex items-center gap-4">
                    <div className="bg-foreground p-2 rounded-sm">
                        <Image src={LogoIcon} width={16} height={16} alt="Prepple AI Logo" />
                    </div>
                    <span className="font-bold text-lg">Prepple AI</span>
                </div>
                <div className="flex gap-4 items-center">
                    <ThemeSwitcher />
                    <span className="hidden md:block">Hello, {name}</span>
                    <LogoutButton />
                </div>
            </div>
        </nav>
    )
}