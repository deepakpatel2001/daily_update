console.log('hello world');



import word, { myName, test } from './script1.js';
import age from './script2.js';
import test2 from './functionExport.js';
import { realName } from './see-first-print.js';

console.log('hello world');
console.log(myName);
console.log(word);
console.log(age);

console.log(test2());

console.log(test());

console.log(realName);