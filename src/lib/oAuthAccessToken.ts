import { auth, clerkClient } from "@clerk/nextjs/server"

export async function getOauthAccessToken() {
    const { userId } = await auth()

    if (!userId) {
        return null;
    }
    const provider = 'google'
    const client = await clerkClient()
    const clerkResponse = await client.users.getUserOauthAccessToken(userId, provider)
    const token = clerkResponse.data[0].token
    return token;
}