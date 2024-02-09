export interface AccountsParams {
	page?: number;
	pageSize?: number;
	fromAccount?: string;
	toAccount?: string;
}

export interface Account {
	code: string;
	name: string;
}
