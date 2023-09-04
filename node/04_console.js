const fs = require('fs') // filesystem
const {Console} = require('console');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({stdout: output, stderr: errorOutput});
const count = 6;
logger.log('count: %d', count);
logger.error('count: ' + count);

const arr = [
    {name: "John Doe", email: "john@gmail.com"},
    {name: "Jane Doe", email: "jane@gmail.com"}
];
console.table(arr);

const obj = {
    students: {
        grade1: {class1: {}, class2: {}},
        grade2: {class1: {}, class2: {}},
        teachers: ["Jone Doe", "Jane Deo"]
    }
};
console.dir(obj, {depth:2, color:true});

console.time("func 1");
for(let i=0; i<999999; i++) {
    // 특정 코드
}
console.timeEnd("func 1");