const product = {
	name: "socks",
	price: 1090,
};

console.log(product, product.name, product.price);

product.name = "cotton socks";

console.log(product, product.name, product.price);

product.newProperty = true;

console.log(product, product.name, product.price);

delete product.newProperty;

console.log(product, product.name, product.price);

const product2 = {
	"name": "shirt",
	"delivery-time": "1 day",
	// eslint-disable-next-line no-useless-concat
	["delivery" + "time"]: "1 day",
	"rating": {
		stars: 4.5,
		count: 87,
	},
	"function"() {
		console.log("Function inside object");
	},
};

// Function inside object = method/

console.log(
	product2.name,
	// eslint-disable-next-line dot-notation
	product2["name"],
	product2["delivery-time"],
	console.log(product2.rating.count),
);

product2.function();

console.log(typeof Math.random);

const jsonString = JSON.stringify(product);

console.log(jsonString);

// JSON does not support functions.
// Results in a string.
console.log(JSON.parse(jsonString));

console.log("Hello".length);
console.log("Hello".toUpperCase());

// "Hello" = special object. (auto-boxing)
// Doesn't work with null/undefined.

// Object is created in the computer's memory.
// The variable is a reference.
const object1 = {message: "Hello"};

// Does not copy the object.
// It just makes another reference.
// For efficiency.
// Copying reference is much faster.
// "Copy by reference"
const object2 = object1;

object1.message = "Goodbye";

console.log(object1);
console.log(object2);

console.log(object1 === object2);
// => True because they have the same reference.

const object3 = {
	message: "Goodbye",
};

console.log(object3 === object1);
// => False because they don't have the same reference. (Even though they have the same values)

const object4 = {
	message: "Goodbye",
	price: 799,
};

// Destructuring
// const message = object4.message;
// @ts-ignore
const {message, price} = object4;

console.log(message, price);

// Shorthand property.
const object5 = {
	// message: message,
	message,
	// method: function function1() {
	// 	console.log("method");
	// },
	// Shorthand method syntax.
	method() {
		console.log("method");
	},
};

object5.method();

const product3 = {
	name: "basketball",
	price: 2095,
};

console.log(product3);

product3.price += 500;

console.log(product3);

product3["delivery-time"] = "3 days";

console.log(product3);

const comparePrice = (p1, p2) => (p1.price < p2.price ? p1 : p2);

console.log(comparePrice(product3, product));

const isSameProduct = (p1, p2) => p1.name === p2.name && p1.price === p2.price;

console.log(isSameProduct(product3, product));

const product4 = {
	name: "basketball",
	price: 2595,
};

console.log(isSameProduct(product3, product4));

console.log("Good Morning!".toLowerCase());
console.log("test".repeat(2));
