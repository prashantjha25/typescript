/**
 *
 * In TypeScript, an enum is a way to define a set of named constants.
 * Enums are useful when you have a group of related values and want
 * to give them descriptive names instead of using numeric or string
 * literals directly in your code.
 *
 *
 *
 */

enum Directions {
  UP, //By default value starts with 0
  DOWN,
  LEFT,
  RIGHT,
}
console.log(Directions.UP);

// You can also manually set the numeric values if you prefer:

enum Days {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY, //will print 3
}

console.log(Days.WEDNESDAY);

enum Directions {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log(Directions.Down);

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // Output: 1
console.log(Direction[1]); // Output: "Up"

const enum DT {
  Up = 1,
  Down,
  Left,
  Right,
}

let direction: DT = DT.Up;
console.log(direction); // Output: 1 (directly inline the value without creating the enum object at runtime)
