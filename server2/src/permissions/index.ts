import { rule, shield } from 'graphql-shield';
import { getUserId } from '../utils';

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  // isPostOwner: rule()(async (parent, { id }, context) => {
  //   const userId = getUserId(context);
  //   const author = await context.prisma.post({ id }).author();
  //   return userId === author.id;
  // })
  isAdmin: rule()(async (parent, args, context) => {
    const userId = getUserId(context);
    const userRole =
      userId && (await context.prisma.user({ id: userId }).role());
    return Boolean(userRole && userRole === 'ADMIN');
  }),
  isChampion: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context);
    const champion = await context.prisma
      .project({ id })
      .champions({ where: { id: userId } });
    return Boolean(champion);
  })
};
// TODO
export const permissions = shield({
  Query: {
    // me: rules.isAuthenticatedUser,
    // filterPosts: rules.isAuthenticatedUser,
    // post: rules.isAuthenticatedUser,
  },
  Mutation: {
    // createDraft: rules.isAuthenticatedUser,
    // deletePost: rules.isPostOwner,
    // publish: rules.isPostOwner,
  }
});
