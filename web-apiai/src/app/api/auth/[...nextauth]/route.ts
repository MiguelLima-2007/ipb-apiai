import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        if (
          credentials.email === "pastor@gmail.com" &&
          credentials.password === "123123"
        ) {
          return {
            id: "1",
            name: "Pastor Matheus",
            email: "pastor@gmail.com",
          };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };