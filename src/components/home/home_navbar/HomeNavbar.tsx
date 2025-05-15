import { SidebarTrigger } from "../../ui/sidebar";
import { DesktopSearchInput } from "./DesktopSearchInput";
import { MobileSearchInput } from "./MobileSearchInput"; // Ensure this is imported
import { AuthButton } from "./AuthButton";
import { ThemeSwitch } from "../../ThemeSwitch";
import { LogoProvider } from "./LogoProvider";
import { Bell } from "lucide-react";

export const HomeNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 flex items-center px-2 z-50 bg-white dark:bg-black">
            <div className="flex justify-between items-center w-full">
                {/* Menu and Logo */}
                <div className="flex items-center flex-shrink-0 pl-1 gap-3">
                    <SidebarTrigger size="lg" />
                    <LogoProvider />
                </div>

                <div className="flex-1 hidden md:flex justify-center items-center mx-auto max-w-3xl px-2 sm:px-4">
                    <DesktopSearchInput />
                </div>

                <div className="flex-1 md:hidden"></div>

                {/* Auth & Mobile Search Trigger */}
                <div className="flex flex-shrink-0 items-center gap-2 sm:gap-4">
                    <div className="md:hidden"> {/* Wrapper to show MobileSearchInput only on small screens */}
                        <MobileSearchInput />
                    </div>
                    <ThemeSwitch />
                    <Bell className="cursor-pointer hidden sm:block" />
                    <AuthButton />
                </div>
            </div>
        </nav>
    );
};