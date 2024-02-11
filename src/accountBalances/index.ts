import { Base } from '../base';
import { accountBalance } from '../schemas';
import { AccountBalancesParams } from './types';

const resourceName = 'accountBalances';

export class AccountBalances extends Base {
	getAccountBalances(date: string, params?: AccountBalancesParams) {
		const searchParams = this.prepareParamsForURLSearch({ date, ...params });
		const queryString = `?${new URLSearchParams(searchParams).toString()}`;

		return this.request<accountBalance[]>(`${resourceName}${queryString}`);
	}

	getAccountBalance(accountCode: string, date: string) {
		const searchParams = this.prepareParamsForURLSearch({ date });
		const queryString = `?${new URLSearchParams(searchParams).toString()}`;

		return this.request<accountBalance>(
			`${resourceName}/${accountCode}${queryString}`
		);
	}
}
