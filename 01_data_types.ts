/**
 * There is already a small set of primitive types available in JavaScript: 
 * boolean, 
 * bigint, 
 * null, 
 * number, 
 * string, 
 * symbol, and 
 * undefined, 
 * TypeScript extends this list with a few more : **any** (allow anything), 
 * **unknown** (ensure someone using this type declares what the type is), 
 * **never** (it’s not possible that this type could happen), 
 * and **void** (a function which returns undefined or has no return value).
 * 
 * 
 */


// using any
 //when we don't know the type or want to skip type checking in ts
const networkData: any = {
    name:'prashant',
    id:12198
}

console.log(networkData);

//Array : list of values
// let array:<type>[];

let nums1:number[] = [1,2,3,4,5,6];
console.log(nums1);


/**
 * With TypeScript, you can create complex types by combining simple ones. 
 * There are two popular ways to do so: 
 * > unions and 
 * > generics.
*/
type MyBool = true | false;
type newType = 1 | 2 | 3 | 4; //will allow only 1,2,3,4 value in variable...

let nums2:MyBool[] = [true, false, true];
console.log(nums2);

//Handling objs
type Mentor = { id: number; name: string };

const mentee: { name: string; id: number; reportTo: Mentor } = {
    name: 'Prashant',
    id: 1291,
    reportTo: {
        id: 101,
        name: 'John Doe'
    }
};

console.log(mentee);



