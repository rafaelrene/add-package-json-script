import path from 'path';

const test = async () => {
  return await Promise.resolve('test');
};

const a = path.resolve(__dirname + '/test.js');
console.log(test());
