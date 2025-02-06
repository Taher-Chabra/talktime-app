import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { assignRandomColor } from '@/lib/utils';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  database: process.env.DB_CONN_STR,
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    redirect: async (url, baseUrl) => {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl);
    },
    session: async (session, token) => {
      session.user.id = token.id;
      session.user.color = assignRandomColor(`${token.id}`);
      return session;
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
