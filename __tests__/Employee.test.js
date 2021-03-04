const Employee = require('../lib/Employee.js');
const testEmployee = {name: 'Ian', id: 1, email: 'fake@email.com'};

test('create an employee object', () => {
    const employee = new Employee(testEmployee);

    expect(employee.name).toBe('Ian');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get employees name', () => {
    const employee = new Employee(testEmployee);

    expect(employee.getName()).toEqual(employee.name);
});

test('get employees ID', () => {
    const employee = new Employee(testEmployee);

    expect(employee.getID()).toEqual(employee.id);
})

test('get employees email address', () => {
    const employee = new Employee(testEmployee);

    expect(employee.getEmail()).toEqual(employee.email);
})

test('get employees role', () => {
    const employee = new Employee(testEmployee);

    expect(employee.getRole()).toEqual('Employee');
})