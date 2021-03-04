const Intern = require('../lib/Intern.js');
const testEmployee = {name: 'Ian', id: 1, email: 'fake@email.com', school: 'fakeschool'};

test('create an employee object', () => {
    const intern = new Intern(testEmployee);

    expect(intern.name).toBe('Ian');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('change role', () => {
    const intern = new Intern(testEmployee);

    expect(intern.getRole()).toBe('Intern');
});

test('get school', () => {
    const intern = new Intern(testEmployee);

    expect(intern.getSchool()).toBe(intern.school);
});