import { prismaObjectType } from 'nexus-prisma';

export const Skill = prismaObjectType({
  name: 'Skill',
  definition(t) {
    t.prismaFields(['*']);
  }
});
