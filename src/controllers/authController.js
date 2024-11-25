import { AuthService } from '../services/authService.js';

export class AuthController {
    static async login(req, res) {
        try {
            const { userId, phoneNum } = req.body;

            // 로그인 서비스 호출
            const token = await AuthService.login(userId, phoneNum);

            // 성공 응답
            res.status(200).json({
                message: 'Login successful',
                token
            });
        } catch (error) {
            res.status(401).json({
                message: error.message || 'Login failed'
            });
        }
    }
}
