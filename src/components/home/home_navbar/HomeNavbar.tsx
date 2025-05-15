import { SidebarTrigger } from "../../ui/sidebar"
import { SearchInput } from "./SearchInput"
import { AuthButton } from "./AuthButton"
import { ThemeSwitch } from "../../ThemeSwitch"
import { LogoProvider } from "./LogoProvider"
import { Bell } from "lucide-react"

export const HomeNavbar = () => {

    return (
        <nav className="fixed top-0 left-0 right-0 h-16 flex items-center px-2 z-50 bg-white dark:bg-black">
            <div className="flex justify-between items-center w-full">
                {/* Menu and Logo */}
                <div className=" flex items-center flex-shrink-0 pl-1 gap-3">
                    <SidebarTrigger size="lg"/>
                    <LogoProvider />
                </div>

                {/* Search Bar */}
                <div className="flex-1 flex justify-center  mx-auto max-w-3xl">
                    <SearchInput />
                </div>

                {/* Auth */}
                <div className=" flex flex-shrink-0 items-center gap-4">
                    <ThemeSwitch />
                    <Bell className="cursor-pointer"/>
                    <AuthButton />
                </div>
            </div>
        </nav>
    )
}