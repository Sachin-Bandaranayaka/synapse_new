import { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from '@/lib/mongodb';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        }
    }
}

const adminUser = {
    id: '1',
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
};

export const authOptions: AuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                // Check if the credentials match the admin user
                if (
                    credentials.email === adminUser.email &&
                    credentials.password === adminUser.password
                ) {
                    return {
                        id: adminUser.id,
                        email: adminUser.email,
                        name: 'Admin',
                    };
                }
                return null;
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async signIn({ user, account }) {
            // For OAuth providers, check if the email is the admin email
            if (account?.provider !== 'credentials') {
                return user.email === process.env.ADMIN_EMAIL;
            }
            return true;
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.id = token.sub!;
            }
            return session;
        },
    },
}; 