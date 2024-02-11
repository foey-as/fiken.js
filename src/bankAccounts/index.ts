import { Base } from '../base';
import { BankAccount, BankAccountsParams } from './types';

const resourceName = 'bankaccounts';

export class BankAccounts extends Base {
	getBankAccounts(params?: BankAccountsParams) {
		const searchParams = this.prepareParamsForURLSearch(params);
		const queryString = `?${new URLSearchParams(searchParams).toString()}`;

		return this.request<BankAccount[]>(resourceName + queryString);
	}
}
