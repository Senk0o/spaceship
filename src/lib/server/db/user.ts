import { prisma } from '../prisma';

export const UserRepository = {
  findAll() {
    return prisma.user.findMany();
  },

  findById(id: bigint) {
    return prisma.user.findUnique({
      where: { id }
    });
  },

  getTopUsers(limit: number) {
    return prisma.user.findMany({
      orderBy: {
        points: 'desc',
      },
      take: limit
    });
  },

  async addBadges(
      userId: bigint,
      badgeIds: bigint | bigint[]
  ) {
    const ids = Array.isArray(badgeIds) ? badgeIds : [badgeIds];

    return prisma.userBadge.createMany({
      data: ids.map((badgeId) => ({
        user_id: userId,
        badge_id: badgeId,
      })),
      skipDuplicates: true,
    });
  },
  
  create(data: {
    username: string;
    email: string;
    password: string;
    photo: string;
    linkedin: string;
    vaisseau: string;
    points: bigint;
  }) {
    return prisma.user.create({ data });
  },
};
