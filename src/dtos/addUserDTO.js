export class AddUserDTO {
    constructor({ userId, phoneNum, age }) {
        if (!userId || typeof userId !== 'string') {
            throw new Error('Invalid or missing userId');
        }
        if (!phoneNum || typeof phoneNum !== 'string') {
            throw new Error('Invalid or missing phoneNum');
        }
        if (!age || typeof age !== 'number') {
            throw new Error('Invalid or missing age');
        }

        this.userId = userId;
        this.phoneNum = phoneNum;
        this.age = age;
    }
}
