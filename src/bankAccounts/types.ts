export interface BankAccountsParams {
	page?: number;
	pageSize?: number;
	inactive?: boolean;
}

export interface BankAccount {
	bankAccountId: number;
	name: string;
	accountCode: string;
	bankAccountNumber: string;
	type: string;
	inactive: boolean;
}
