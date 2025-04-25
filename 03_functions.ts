/**
 * Functions in TypeScript – Key Syntax & Notes 🚀
 * 
 * 1️⃣ Basic Function
 * function functionName(param1: type, param2: type): returnType { }
 * 
 * 2️⃣ Optional & Default Parameters
 * function funcName(param1: type, param2?: type): returnType { } // Optional  
 * function funcName(param1: type, param2: type = defaultValue): returnType { } // Default  
 * 
 * ✅ Optional (?) params must be last.
 * ✅ Default params provide a fallback value.
 * 
 * 3️⃣ Arrow Function
 * const funcName = (param1: type, param2: type): returnType => { };
 * 
 * 4️⃣ Rest Parameters (...)
 * function funcName(...params: type[]): returnType { }
 * 
 * 
 * 5️⃣ Function Type Signature
 * type FuncType = (param1: type, param2: type) => returnType;
 * const functionName: FuncType = (arg1, arg2) => { };
 * 
 * 6️⃣ Function Overloading
 * function funcName(param: type1): returnType;  
 * function funcName(param: type2): returnType;  
 * function funcName(param: any): returnType { } // Implementation  
 * 
 * 
*/

function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Prashant")); // Output: Hello, Prashant!

function add(...nums: number[]){
    return nums.reduce((acc, curr)=> acc+curr);
}

console.log(add(1,2,3,5,6));

function fun():void{
    console.log('void function');
    //return 1; //Error: Type 'number' is not assignable to type 'void'.
}

fun();