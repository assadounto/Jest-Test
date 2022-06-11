const strLenght = require('./string-length')
const sum = require('./string-length')

test('Returns length of string' , () =>{
    expect(strLenght('kwesi')).toBe(5)
})

test('Checks if length is greater than 1 but less 10' , () =>{
    let teststring='kwesis889';
    expect(strLenght(teststring)>1 && strLenght(teststring)<10).toBe(true)
})

