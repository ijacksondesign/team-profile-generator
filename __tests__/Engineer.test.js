const Engineer = require('../lib/Engineer.js');
const testEmployee = {name: 'Ian', id: 1, email: 'fake@email.com', github: 'testgit'};

test('create an employee object', () => {
    const engineer = new Engineer(testEmployee);

    expect(engineer.name).toBe('Ian');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test('change role', () => {
    const engineer = new Engineer(testEmployee);

    expect(engineer.getRole()).toBe('Engineer');
});

test('get github account', () => {
    const engineer = new Engineer(testEmployee);

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});