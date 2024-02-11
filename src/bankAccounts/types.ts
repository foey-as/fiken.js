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
	type: 'normal' | 'tax_deduction' | 'foreign' | 'credit_card';
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
