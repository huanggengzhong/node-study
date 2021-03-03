const path = require('path');

//join()路径拼接
// console.log(path.join('/user', 'why', 'abc.txt'));//\user\why\abc.txt

const basePath = '/User/why';
const filename = 'abc.txt';

// const path = basePath + "/" + filename;
//path.resole()//文件夹和文件拼接
const filepath = path.resolve(basePath, filename);
console.log(filepath); //d:\User\why\abc.txt
