/**
 * Get classNames as string, removing any falsy values from the passed in array.
 * @param classNames Aray of class strings.
 * @returns string.
 */
export function getClasses(classNames: (string | boolean | null)[]) {
	return classNames.filter(Boolean).join(' ');
}
