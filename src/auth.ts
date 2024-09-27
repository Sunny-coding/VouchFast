import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
  // trustHost: true,
  // adapter: PrismaAdapter(prisma),
  // secret: process.env.AUTH_SECRET,
  providers: [GitHub],
  debug: process.env.NODE_ENV === 'development',
});
