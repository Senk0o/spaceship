import { prisma } from '../prisma';

export const GameRepository = {
  findAll() {
    return prisma.game.findMany({
      include: {
        category: true,
      },
    });
  },

  findLatest(limit: number) {
    return prisma.news.findMany({
      orderBy: {
        id: 'desc',
      },
      take: limit,
    });
  },

  create(data: {
    name: string;
    description: string;
    category_id: bigint;
  }) {
    return prisma.game.create({ data });
  },
};
