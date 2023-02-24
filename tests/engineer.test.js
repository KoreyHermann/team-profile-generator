 // engineer test
 const Engineer = require('../lib/Engineer');


test('creates engineer object', () => {
    const engineer = new Engineer('korey', 90, 'khermann135@gmail.com', 'KoreyHermann');
    
    expect(engineer.github) .toEqual(expect.any(String));
});


test('gets engineer github value', () => {
    const engineer = new Engineer('korey', 90, 'khermann135@gmail.com', 'KoreyHermann');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

 
test('gets role of employee', () => {
    const engineer = new Engineer('korey', 90, 'khermann135@gmail.com', 'KoreyHermann');

    expect(engineer.getRole()).toEqual("Engineer");
});