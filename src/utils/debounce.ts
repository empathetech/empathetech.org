export const debounce = (debouncedFunction: Function, milliseconds = 300) => {
	let timeoutId: ReturnType<typeof setTimeout>
	return function (this: any, ...parameters: any[]) {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(
			() => debouncedFunction.apply(this, parameters),
			milliseconds
		)
	}
}
