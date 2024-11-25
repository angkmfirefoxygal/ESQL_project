import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserRepository {
    static async createUser(userDTO) {
        try {
            const user = await prisma.user.create({
                data: {
                    userId: userDTO.userId,
                    phoneNum: userDTO.phoneNum,
                    age: userDTO.age
                }
            });
            return user;
        } catch (error) {
            throw new Error('Database error: ' + error.message);
        }
    }
}
