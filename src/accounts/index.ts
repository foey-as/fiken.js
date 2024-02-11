import { Base } from '../base';
import { account } from '../schemas';
import { AccountsParams } from './types';

const resourceName = 'accounts';

export class Accounts extends Base {
	getAccounts(params?: AccountsParams) {
		const searchParams = this.prepareParamsForURLSearch(params);
		const queryString = `?${new URLSearchParams(searchParams).toString()}`;

		return this.request<account[]>(resourceName + queryString);
	}

	getAccount(accountCode: string) {
		return this.request<account>(`${resourceName}/${accountCode}`);
	}
}
