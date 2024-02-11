type Config = {
	apiKey: string;
	companySlug: string;
};

export type Pagination = {
	page?: number;
	pageSize?: number;
};

export abstract class Base {
	private apiKey: string;
	private basePath: string;
	private companySlug: string;

	constructor(config: Config) {
		this.apiKey = config.apiKey;
		this.companySlug = config.companySlug;
		this.basePath = `https://api.fiken.no/api/v2/companies/${this.companySlug}/`;
	}

	protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
		const url = this.basePath + endpoint;
		const headers = {
			Authorization: 'Bearer ' + this.apiKey,
			Accept: 'application/json',
		};

		const config = {
			...options,
			headers,
		};

		return fetch(url, config).then((r) => {
			if (r.ok) {
				return r.json();
			}
			console.log(r.headers);
			throw new Error(r.statusText);
		});
	}

	protected prepareParamsForURLSearch(params: any): Record<string, string> {
		const result: Record<string, string> = {};

		Object.keys(params).forEach((key) => {
			const value = params[key];
			if (value !== undefined) {
				// Exclude undefined values
				result[key] = String(value); // Convert everything to strings
			}
		});

		return result;
	}
}
