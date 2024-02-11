import { Base } from '../base';
import { AccountBalance, AccountBalancesParams } from './types';

const resourceName = 'accountBalances';

export class AccountBalances extends Base {
	getAccountBalances(date: string, params?: AccountBalancesParams) {
		const searchParams = this.prepareParamsForURLSearch({ date, ...params });
		const queryString = `?${new URLSearchParams(searchParams).toString()}`;

		return this.request<AccountBalance[]>(`${resourceName}${queryString}`);
	}

	getAccountBalance(accountCode: string, date: string) {
		const searchParams = this.prepareParamsForURLSearch({ date });
		const queryString = `?${new URLSearchParams(searchParams).toString()}`;

		return this.request<AccountBalance>(
			`${resourceName}/${accountCode}${queryString}`
		);
	}
}
