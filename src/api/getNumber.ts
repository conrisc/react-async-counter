export function getNumber(seconds: number): Promise<number> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(seconds)
		}, seconds * 1000)
	});
}
