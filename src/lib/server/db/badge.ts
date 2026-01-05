import { prisma } from '../prisma';

export const BadgeRepository = {
  findAll() {
    return prisma.badge.findMany();
  },

  create(data: {
    logo: string;
    name: string;
    description: string;
  }) {
    return prisma.badge.create({ data });
  },
};

