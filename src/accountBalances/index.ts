import qs from 'querystringify';

import { Base } from '../base';

const resourceName = 'accountbalances';

export class AccountBalances extends Base {
	getAccountBalances(params: AccountBalancesParams) {
		let query = resourceName;

		query += qs.stringify(params, '?');

		return this.request<AccountBalance[]>(query);
	}

	getAccountBalance(accountCode: string, params: AccountBalanceParams) {
		let query = resourceName + `/${accountCode}`;

		query += qs.stringify(params, '?');

		return this.request<AccountBalance>(query);
	}
}
