import { AccountBalances } from './accountBalances';
import { Accounts } from './accounts';
import { Base } from './base';
import { Contacts } from './contacts';
import { Groups } from './groups';
import { CompaniesParams, Company } from './types';
import { applyMixins } from './utils';

class Fiken extends Base {
	getCompanies(params?: CompaniesParams) {
		const searchParams = this.prepareParamsForURLSearch(params);
		const queryString = `?${new URLSearchParams(searchParams).toString()}`;

		return this.request<Company>(queryString);
	}
}
interface Fiken extends Contacts, Accounts, AccountBalances, Groups {}
applyMixins(Fiken, [Contacts, Accounts, AccountBalances, Groups]);

export default Fiken;

const fiken = new Fiken({
	apiKey: '5581387990.wTxC1RxSKiVWqtIMlS3wbCdewKhoY474',
	companySlug: 'fiken-demo-hel-brod-as',
});

fiken.getCompanies().then((accounts) => console.log(accounts));
