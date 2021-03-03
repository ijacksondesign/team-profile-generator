const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Ian');

    expect(employee.name).toBe('Ian');
    expect(employee.id).toEqual(expect.any(Object));
    expect(employee.email).toEqual(expect.any(Object));
    expect(employee.role).toEqual(expect.any(Object));
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