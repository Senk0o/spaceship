import { prisma } from '../prisma';

export const CategoryRepository = {
  findAll() {
    return prisma.category.findMany({
      include: {
        badge: true,
        games: true,
      },
    });
  },

  findGames(categoryId: bigint) {
    return prisma.game.findMany({
      where: {
        category_id: categoryId,
      },
    });
  },

  create(data: {
    name: string;
    summary: string;
    description: string;
    badge_id: bigint;
  }) {
    return prisma.category.create({ data });
  },
};
