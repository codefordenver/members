import { prismaObjectType } from 'nexus-prisma';

export const Project = prismaObjectType({
  name: 'Project',
  definition(t) {
    t.prismaFields(['*']);
  }
});
