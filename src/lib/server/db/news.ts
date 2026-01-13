import { prisma } from '../prisma';

export const NewsRepository = {
  getAll: async () => {
    return prisma.news.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20
    });
  },

  findById(id: bigint) {
    return prisma.news.findUnique({
      where: { id }
    });
  },

  findLatest(limit: number) {
    return prisma.news.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
    });
  },

  create(data: {
    titre: string;
    description: string;
    createdAt: Date;
    photo: string;
    redirection?: string;
  }) {
    return prisma.news.create({ data });
  },
};
