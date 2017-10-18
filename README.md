# bmjs-engperson
An English language utility for checking if a given pronoun is first-person, singular or plural. Receives an active pronoun string (e.g. "I", "he", "they") a returns a string of either "singular", "plural" or "first".

*Example usage:*
```javascript
const person = require('bmjs-engperson');

let exampleOne = person('they');
console.log(exampleOne); // returns plural

let exampleTwo = person('he');
console.log(exampleTwo); // returns singular

let exampleThree = person('i');
console.log(exampleThree); // returns first

let exampleFour = person();
console.log(exampleFour); // returns a default of singular
```
