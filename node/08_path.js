const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js")); // 경로의 마지막 부분에서 확장자를 제거한 이름

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename));
const path1 = path.parse(__filename);
console.log(path1.name);

const path2 = path.format({
    root: '/',
    dir: '/home/jeongeun/bootcamp/node',
    base: '08_path.js',
    ext: '.js',
    name: '08_path'
});

console.log(path2);
console.log(path.join("/home", "jeongeun", "bootcamp", "node", "08_path.js"))