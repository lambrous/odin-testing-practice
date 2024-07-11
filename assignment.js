export function capitalize(str) {
	const [first, ...rest] = str;
	return first.toUpperCase() + rest.join("");
}

export function reverseString(str) {
	let result = "";
	const lastIndex = str.length - 1;

	for (let i = lastIndex; i >= 0; i--) {
		result += str[i];
	}

	return result;
}

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

export function caesarCipher(str, shift) {
	let result = "";
	const smallACode = "a".charCodeAt(0);
	const smallZCode = "z".charCodeAt(0);

	const bigACode = "A".charCodeAt(0);
	const bigZCode = "Z".charCodeAt(0);

	for (const char of str) {
		const charCode = char.charCodeAt(0);
		const isLowerCase = charCode >= smallACode && charCode <= smallZCode;
		const isUpperCase = charCode >= bigACode && charCode <= bigZCode;

		if (!isLowerCase && !isUpperCase) {
			result += char;
			continue;
		}

		const base = isLowerCase ? smallACode : bigACode;
		const code = ((charCode - base + shift) % 26) + base;
		result += String.fromCharCode(code);
	}

	return result;
}

export function analyzeArray(arr) {
	return {
		average: Math.round(arr.reduce((sum, value) => sum + value) / arr.length),
		min: Math.min(...arr),
		max: Math.max(...arr),
		length: arr.length,
	};
}
