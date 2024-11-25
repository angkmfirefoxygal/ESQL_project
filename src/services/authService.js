import { UserRepository } from '../repositories/authRepository.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret'; // 환경변수로 대체 권장
const JWT_EXPIRES_IN = '1h'; // 토큰 유효 기간

export class AuthService {
    static async login(userId, phoneNum) {
        // 사용자 조회
        const user = await UserRepository.findUserByUserId(userId);
        if (!user) {
            throw new Error('User not found');
        }

        // phoneNum 검증
        if (user.phoneNum !== phoneNum) {
            throw new Error('Invalid credentials');
        }

        // JWT 토큰 생성
        const token = jwt.sign({ userId: user.userId, id: user.id }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN
        });

        return token;
    }
}
