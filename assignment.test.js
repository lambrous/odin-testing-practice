import {
	capitalize,
	reverseString,
	caesarCipher,
	analyzeArray,
	add,
	subtract,
	multiply,
	divide,
} from "./assignment";

test("First character capitalized", () => {
	expect(capitalize("odin")).toMatch("Odin");
});

test("Reverse a string", () => {
	expect(reverseString("Odin")).toMatch("nidO");
});

test("Addition", () => {
	expect(add(1, 2)).toBe(3);
});

test("Subtraction", () => {
	expect(subtract(5, 3)).toBe(2);
});

test("Multiplication", () => {
	expect(multiply(2, 3)).toBe(6);
});

test("Division", () => {
	expect(divide(6, 3)).toBe(2);
});

test("Caesar cipher", () => {
	expect(caesarCipher("xyz", 3)).toMatch("abc");
});

test("Cipher case preservation", () => {
	expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
});

test("Cipher preserve punctuations", () => {
	expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});

test("Analyze array", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
