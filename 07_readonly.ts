type User = {
  readonly hobbies: string[];
  name: string;
};

const user: User = {
  hobbies: ["cricket", "football"],
  name: "Prashant",
};

// user.hobbies = []; ERROR
user.hobbies.push("chess");
console.log(user);
