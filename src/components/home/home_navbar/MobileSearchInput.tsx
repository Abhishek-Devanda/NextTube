"use client";
import { useState } from "react";
import { SearchIcon, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const MobileSearchInput = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query) {
            return;
        }
        router.push(`/search?query=${query}`);
        if (isMobileSearchOpen) {
            setIsMobileSearchOpen(false);
        }
    };

    if (isMobileSearchOpen) {
        // This div is absolute positioned and only shown on mobile when search is open
        return (
            <div className="absolute top-0 left-0 w-full h-16 flex items-center px-2 z-[51] bg-white dark:bg-black md:hidden">
                <button
                    type="button"
                    onClick={() => setIsMobileSearchOpen(false)}
                    className="p-2 mr-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full"
                    aria-label="Close search"
                >
                    <ArrowLeft className="h-6 w-6" />
                </button>
                <form onSubmit={handleSubmit} className="flex-1 flex items-center">
                    <input
                        autoFocus
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        type="text"
                        placeholder="Search..."
                        className="flex-1 h-10 px-4 rounded-lg border bg-card text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:border-neutral-700 dark:bg-neutral-900"
                    />
                    <button
                        type="submit"
                        className="ml-2 p-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                        aria-label="Search"
                    >
                        <SearchIcon className="h-5 w-5" />
                    </button>
                </form>
            </div>
        );
    }

    // This is the search icon button, visible only on mobile (due to parent div in HomeNavbar)
    return (
        <button
            type="button"
            onClick={() => setIsMobileSearchOpen(true)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full"
            aria-label="Open search"
        >
            <SearchIcon className="h-6 w-6" />
        </button>
    );
};