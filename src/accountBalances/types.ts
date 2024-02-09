interface AccountBalancesParams {
	date: string;
	fromAccount?: string;
	toAccount?: string;
	page?: number;
	pageSize?: number;
}

interface AccountBalanceParams {
	date: string;
}

interface AccountBalance {
	code: string;
	name: string;
	balance: number;
}
