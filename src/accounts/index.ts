import { Base } from '../base';
import { Account, AccountsParams } from './types';

const resourceName = 'accounts';

export class Accounts extends Base {
	getAccounts(params?: AccountsParams) {
		const searchParams = this.prepareParamsForURLSearch(params);
		const queryString = `?${new URLSearchParams(searchParams).toString()}`;

		return this.request<Account[]>(resourceName + queryString);
	}

	getAccount(accountCode: string) {
		return this.request<Account>(`${resourceName}/${accountCode}`);
	}
}
