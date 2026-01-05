import { prisma } from '../prisma';

export const NewsRepository = {
  findAll() {
    return prisma.news.findMany();
  },

  create(data: {
    titre: string;
    description: string;
    photo: string;
    redirection?: string;
  }) {
    return prisma.news.create({ data });
  },
};
