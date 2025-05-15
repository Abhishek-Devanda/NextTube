import { UserCircleIcon } from "lucide-react"
import { Button } from "../../ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton, } from "@clerk/nextjs"

export const AuthButton = () => {
    const userProfileProps = {
        additionalOAuthScopes: {
            google: [
                "https://www.googleapis.com/auth/youtube.readonly",
                "https://www.googleapis.com/auth/youtube",
                "https://www.googleapis.com/auth/youtube.force-ssl"
            ]
        }
    }

    return (
        <>
            <SignedIn>
                <UserButton userProfileProps={userProfileProps}/>
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button
                        variant='outline'
                        className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/2 rounded-full shadow-none">
                        <UserCircleIcon />
                        Sign In
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    )
}