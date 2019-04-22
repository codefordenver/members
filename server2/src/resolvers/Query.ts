// import { getUserId } from '../utils'
import { prismaObjectType } from 'nexus-prisma';

export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    // TODO: This will be a nice addition
    // t.field('me', {
    //   type: 'User',
    //   resolve: (parent, args, ctx) => {
    //     const userId = getUserId(ctx)
    //     return ctx.prisma.user({ id: userId })
    //   },
    // })

    t.prismaFields(['*']);
  }
});
