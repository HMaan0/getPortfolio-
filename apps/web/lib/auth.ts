import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../packages/database/src/client";
import bcrypt from "bcrypt";
import { credentialsSchema } from "./zod/authSchema";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password", placeholder: "" },
        newUser: {},
      },

      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Email and password are required");
        }
        const parsedCredentials = credentialsSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.error(parsedCredentials.error);
          return null;
        }
        const { email, password } = parsedCredentials.data;
        const newUser = credentials.newUser;

        try {
          if (newUser === "true") {
            const user = await prisma.user.findUnique({
              where: { email },
            });

            if (!user) {
              const hashedPassword = await bcrypt.hash(password, 10);

              const newUser = await prisma.user.create({
                data: {
                  email,
                  password: hashedPassword,
                },
              });
              return {
                id: newUser.id,
                email: newUser.email,
              };
            } else {
              throw new Error("Email already exists. Please Login in");
            }
          } else {
            const oldUser = await prisma.user.findUnique({
              where: { email },
            });

            if (oldUser) {
              const isValidPassword = await bcrypt.compare(
                password,
                oldUser.password
              );

              if (!isValidPassword) {
                throw new Error("Incorrect password.");
              }
              return {
                id: oldUser.id,
                email: oldUser.email,
              };
            } else {
              throw new Error("Incorrect email or password. ");
            }
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
