const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Korey', 90, 'khermann135@gmail.com', 'UNCC');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Korey', 90, 'khermann135@gmail.com', 'UNCC');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role of employee', () => {
    const intern = new Intern('Korey', 90, 'khermann135@gmail.com.com', 'UNCC');

    expect(intern.getRole()).toEqual("Intern");
}); 