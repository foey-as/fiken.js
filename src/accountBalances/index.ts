import { Base } from '../base';
import {
	AccountBalance,
	AccountBalanceParams,
	AccountBalancesParams,
} from './types';

const resourceName = 'accountBalances';

export class AccountBalances extends Base {
	getAccountBalances(params: AccountBalancesParams) {
		const searchParams = this.prepareParamsForURLSearch(params);
		const queryString = `?${new URLSearchParams(searchParams).toString()}`;

		return this.request<AccountBalance[]>(`${resourceName}${queryString}`);
	}

	getAccountBalance(accountCode: string, params: AccountBalanceParams) {
		const searchParams = this.prepareParamsForURLSearch(params);
		const queryString = `?${new URLSearchParams(searchParams).toString()}`;

		return this.request<AccountBalance>(
			`${resourceName}/${accountCode}${queryString}`
		);
	}
}
