import fetch from 'isomorphic-unfetch';

type Config = {
	apiKey: string;
	companySlug: string;
	basePath?: string;
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
		this.basePath =
			config.basePath ||
			`https://api.fiken.no/api/v2/companies/${this.companySlug}/`;
	}

	protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
		const url = this.basePath + endpoint;
		const headers = {
			Authorization: 'Bearer ' + this.apiKey,
			'Content-type': 'application/json',
		};

		const config = {
			...options,
			headers,
		};

		return fetch(url, config).then((r) => {
			if (r.ok) {
				return r.json();
			}
			throw new Error(r.statusText);
		});
	}
}
