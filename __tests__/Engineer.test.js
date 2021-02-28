const Engineer = require('../lib/Engineer.js');

test('create an employee object', () => {
    const engineer = new Engineer('Ian');

    expect(engineer.name).toBe('Ian');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('change role', () => {
    const engineer = new Engineer('Ian');

    expect(engineer.getRole()).toBe('Engineer');
});

test('get github account', () => {
    const engineer = new Engineer('Ian');

    expect(engineer.getGithub()).toBe(engineer.github);
});