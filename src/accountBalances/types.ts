export interface AccountBalancesParams {
	date: string;
	fromAccount?: string;
	toAccount?: string;
	page?: number;
	pageSize?: number;
}

export interface AccountBalanceParams {
	date: string;
}

export interface AccountBalance {
	code: string;
	name: string;
	balance: number;
}
