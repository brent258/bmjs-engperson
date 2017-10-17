# bmjs-engperson
An english language utility for checking if a given pronoun is first-person, singular or plural.

*Example usage:*
```javascript
const func = require('bmjs-engperson');

let exampleOne = func('they');
console.log(exampleOne); // returns plural

let exampleTwo = func('he');
console.log(exampleTwo); // returns singular

let exampleThree = func('i');
console.log(exampleThree); // returns first

let exampleFour = func();
console.log(exampleFour); // returns a default of singular
```
