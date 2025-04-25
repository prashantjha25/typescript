/**
 * 
* 🚀 Key Takeaways:
* ✔ Tuples are fixed-length arrays with specific types.
* ✔ Elements must be in the correct order & type.
* ✔ push() works but can break strict typing.
* ✔ Use readonly to prevent modification.
* ✔ Named tuples improve readability.
* 
* let tupleName: [type1, type2, type3] = [value1, value2, value3];
* 
*/

const person:[string, number] = ['prashant', 123];

person.push(12); //will be modified but cannot be accessed
let code:[number, string] = [121, 'code'];

// console.log(person[2]); Tuple type '[string, number]' of length '2' has no element at index '2'.
console.log(code);