const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Ian');

    expect(employee.name).toBe('Ian');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test('get employees name', () => {
    const employee = new Employee('Ian');

    expect(employee.getName()).toEqual(employee.name);
});

test('get employees ID', () => {
    const employee = new Employee('Ian');

    expect(employee.getID()).toEqual(employee.id);
})

test('get employees email address', () => {
    const employee = new Employee('Ian');

    expect(employee.getEmail()).toEqual(employee.email);
})

test('get employees role', () => {
    const employee = new Employee('Ian');

    expect(employee.getRole()).toEqual(employee.role);
})