import { AccountBalances } from './accountBalances';
import { Accounts } from './accounts';
import { BankAccounts } from './bankAccounts';
import { Base } from './base';
import { Contacts } from './contacts';
import { Groups } from './groups';
import { Products } from './products';
import { Transactions } from './transactions';
import { CompaniesParams, Company } from './types';
import { applyMixins } from './utils';

class Fiken extends Base {
	getCompanies(params?: CompaniesParams) {
		const searchParams = this.prepareParamsForURLSearch(params);
		const queryString = `?${new URLSearchParams(searchParams).toString()}`;

		return this.request<Company[]>(queryString);
	}
}
interface Fiken
	extends Contacts,
		Accounts,
		AccountBalances,
		Groups,
		BankAccounts,
		Products,
		Transactions {}
applyMixins(Fiken, [
	Contacts,
	Accounts,
	AccountBalances,
	Groups,
	BankAccounts,
	Products,
	Transactions,
]);

export default Fiken;
