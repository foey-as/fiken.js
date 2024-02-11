export interface AccountBalancesParams {
	fromAccount?: string;
	toAccount?: string;
	page?: number;
	pageSize?: number;
}

export interface AccountBalance {
	code: string;
	name: string;
	balance: number;
}
