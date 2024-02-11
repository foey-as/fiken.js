import { Base } from '../base';
import {
	BankAccount,
	BankAccountsParams,
	CreateBankAccountParams,
} from './types';

const resourceName = 'bankaccounts';

export class BankAccounts extends Base {
	getBankAccounts(params?: BankAccountsParams) {
		const searchParams = this.prepareParamsForURLSearch(params);
		const queryString = `?${new URLSearchParams(searchParams).toString()}`;

		return this.request<BankAccount[]>(resourceName + queryString);
	}

	getBankAccount(bankAccountId: number) {
		return this.request<BankAccount>(`${resourceName}/${bankAccountId}`);
	}

	createBankAccount(params: CreateBankAccountParams) {
		return this.request<void>(resourceName, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		});
	}
}
