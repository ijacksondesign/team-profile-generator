const Manager = require('../lib/Manager.js');
const testEmployee = {name: 'Ian', id: 1, email: 'fake@email.com', officeNum: 2};

test('create an employee object', () => {
    const manager = new Manager(testEmployee);

    expect(manager.name).toBe('Ian');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
});

test('change role', () => {
    const manager = new Manager(testEmployee);

    expect(manager.getRole()).toBe('Manager');
});