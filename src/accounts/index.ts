import { Base } from '../base';
import { Account } from './types';

export class Accounts extends Base {
	getAccounts() {
		return this.request<Account[]>('/accounts');
	}

	getAccount(accountCode: string) {
		return this.request<Account>(`/accounts/${accountCode}`);
	}
}
