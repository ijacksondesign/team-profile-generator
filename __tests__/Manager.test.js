const Manager = require('../lib/Manager.js');

test('create an employee object', () => {
    const manager = new Manager('Ian');

    expect(manager.name).toBe('Ian');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
});

test('change role', () => {
    const manager = new Manager('Ian');

    expect(manager.getRole()).toBe('Manager');
});