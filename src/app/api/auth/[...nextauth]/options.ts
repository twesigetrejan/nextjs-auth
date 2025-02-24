import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"; // Make sure to import this

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your username",
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your password",
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data
                // Verify credentials here

                const user = { id: "42", name: "Dave", password: "nextauth" };

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user; // Authentication successful
                } else {
                    return null; // Authentication failed
                }
            }
        })
    ],
}
