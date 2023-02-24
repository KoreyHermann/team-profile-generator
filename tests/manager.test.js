// manager test
const Manager = require('../lib/Manager');


test('creates manager object', () => {
    const manager = new Manager('Korey', 90, 'khermann135@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Korey', 90, 'khermann135@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 