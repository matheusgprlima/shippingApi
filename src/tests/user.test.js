import { User } from '../domain/model/user.js';
describe('user test cases' ,() => {
    
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();    
    });

    test('just a simple test', () => {
        const newUser = new User('anyName');
        expect(newUser.name).toEqual('anyName');
    });
})