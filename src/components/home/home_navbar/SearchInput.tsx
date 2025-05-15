"use client";
import { useState } from "react";
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation";

export const SearchInput = () => {
    const router = useRouter()
    const [query, setQuery] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!query) {
            return
        }
        router.push(`/search?query=${query}`)
    }
    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-[600px] ">
            <div className="relative w-full flex items-center">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="w-full pl-4  py-2  pr-12 rounded-l-full  border focus:outline-none focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="px-5 py-2.5 border border-l-0 rounded-r-full disabled:opacity-50 disabled:cursor-not-allowed bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700">
                    <SearchIcon className="size-5" />
                </button>
            </div>

        </form>
    )
}