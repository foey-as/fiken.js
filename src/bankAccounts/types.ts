export enum BankAccountType {
	'normal',
	'tax_deduction',
	'foreign',
	'credit_card',
}

export interface BankAccountsParams {
	page?: number;
	pageSize?: number;
	inactive?: boolean;
}

export interface CreateBankAccountParams {
	name: string;
	bankAccountNumber: string;
	bic?: string;
	iban?: string;
	foreignService?: string;
	type: BankAccountType;
	inactive?: boolean;
}

export interface BankAccount {
	bankAccountId: number;
	name: string;
	accountCode: string;
	bankAccountNumber: string;
	iban: string;
	bic: string;
	type: BankAccountType;
	reconciledBalance: number;
	reconciledDate: string;
	inactive: boolean;
}
