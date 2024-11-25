import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserRepository {
    static async findUserByUserId(userId) {
        return await prisma.user.findUnique({
            where: { userId }
        });
    }
}
