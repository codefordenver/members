// import { stringArg, idArg, mutationType } from 'nexus';
// import { hash, compare } from 'bcrypt'
// import { APP_SECRET, getUserId } from '../utils'
// import { sign } from 'jsonwebtoken'
import { prismaObjectType } from 'nexus-prisma';

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    // TODO
    // t.field('signup', {
    //   type: 'AuthPayload',
    //   args: {
    //     name: stringArg({ nullable: true }),
    //     email: stringArg(),
    //     password: stringArg(),
    //   },
    //   resolve: async (parent, { name, email, password }, ctx) => {
    //     const hashedPassword = await hash(password, 10)
    //     const user = await ctx.prisma.createUser({
    //       name,
    //       email,
    //       password: hashedPassword,
    //     })
    //     return {
    //       token: sign({ userId: user.id }, APP_SECRET),
    //       user,
    //     }
    //   },
    // })

    // t.field('login', {
    //   type: 'AuthPayload',
    //   args: {
    //     email: stringArg(),
    //     password: stringArg(),
    //   },
    //   resolve: async (parent, { email, password }, context) => {
    //     const user = await context.prisma.user({ email })
    //     if (!user) {
    //       throw new Error(`No user found for email: ${email}`)
    //     }
    //     const passwordValid = await compare(password, user.password)
    //     if (!passwordValid) {
    //       throw new Error('Invalid password')
    //     }
    //     return {
    //       token: sign({ userId: user.id }, APP_SECRET),
    //       user,
    //     }
    //   },
    // })

    t.prismaFields(['*']);
  }
});
