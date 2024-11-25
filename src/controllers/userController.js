import { UserService } from '../services/userService.js';
import { AddUserDTO } from '../dtos/addUserDTO.js';

export class UserController {
    static async addUser(req, res) {
        try {
            // 요청 데이터를 DTO로 변환 및 검증
            const userDTO = new AddUserDTO(req.body);

            // 서비스 레이어를 호출
            const newUser = await UserService.addUser(userDTO);

            // 성공 응답
            res.status(201).json({
                message: 'User added successfully',
                data: newUser
            });
        } catch (error) {
            res.status(400).json({
                message: error.message || 'Failed to add user'
            });
        }
    }
}
