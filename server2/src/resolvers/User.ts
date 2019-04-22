import { prismaObjectType } from 'nexus-prisma';

export const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields([
      'id',
      'createdAt',
      'updatedAt',
      'email',
      'name',
      // 'auth0UserId',
      'picture',
      'githubName',
      'flowdockName',
      'description',
      'hasCompletedWizard',
      'role',
      'projectsChampioned',
      'skills'
    ]);
  }
});
