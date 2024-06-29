// What is narrowing in TypeScript?
// Narrowing is the process of refining a broader type to one that is more specific.

// Broad → Specific string → "abc" number → 123 object → Date

// For example, refining string to "abc", or number to 123, so on... You have a broader type, and you shrink it to something more specific.

// Why do we need narrowing?
// And why would do that? Well, to handle the cases individually.

// If you have a variable that can be a string, a number, or a boolean. Then you probably want to handle those cases one by one.

// If it's a string, do this. If it's a number, do that. And if it's a boolean, do this other thing. That is narrowing.

// TypeScript
const doSomething = (value: string | number | boolean) => {
  // If it's a string, do this
  // If it's a number, do that
  // If it's a boolean, do this other thing
};
// You have a broader type, which is the combination of string, number, and boolean. Then you narrow this broader type to just a string, then to a number, and then to a boolean.

// To narrow the types, you can use type guards.

// What is a type guard?
// Type guards are narrowing techniques, they allow you to do narrowing.



// TypeScript is a superset of JavaScript. All JavaScript is valid TypeScript;
// TypeScript wants to be as little intrusive as possible. Instead of forcing us into a new syntax, it will support idiomatic JavaScript ways of doing things. When possible!
// See, narrowing is not a new issue, we've had to deal with it in JavaScript for years now. I bet that you were thinking of the typeof operator, while I was giving the last example.

// The typeof operator allows us to narrow our types. So, it is a type guard.

// TypeScript
// If it's a string, do this
if (typeof value === 'string') { ... }
// There are many other type guards, and you can also create your own. We also have assertion guards, which is another way of doing narrowing.