import { AccountBalances } from './accountBalances';
import { Accounts } from './accounts';
import { BankAccounts } from './bankAccounts';
import { Base } from './base';
import { Contacts } from './contacts';
import { CreditNotes } from './creditNotes';
import { Groups } from './groups';
import { Inbox } from './inbox';
import { Invoices } from './invoices';
import { Offers } from './offers';
import { OrderConfirmations } from './orderConfirmations';
import { Products } from './products';
import { Projects } from './projects';
import { Sales } from './sales';
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
		Transactions,
		Invoices,
		CreditNotes,
		Projects,
		Offers,
		Inbox,
		OrderConfirmations,
		Sales {}

applyMixins(Fiken, [
	Contacts,
	Accounts,
	AccountBalances,
	Groups,
	BankAccounts,
	Products,
	Transactions,
	Invoices,
	CreditNotes,
	Offers,
	Projects,
	Inbox,
	OrderConfirmations,
	Sales,
]);

export default Fiken;
