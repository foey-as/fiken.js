export function applyMixins(derivedCtor: any, baseCtors: any[]): void {
	baseCtors.forEach((baseCtor) => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
			const descriptor =
				Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || {};
			Object.defineProperty(derivedCtor.prototype, name, descriptor);
		});
	});
}
