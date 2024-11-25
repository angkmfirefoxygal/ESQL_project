import { UserRepository } from '../repositories/userRepository.js';

export class UserService {
    static async addUser(userDTO) {
        try {
            // 사용자 추가 로직 처리
            const newUser = await UserRepository.createUser(userDTO);
            return newUser;
        } catch (error) {
            throw new Error('Service error: ' + error.message);
        }
    }
}
