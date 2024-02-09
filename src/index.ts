import { AccountBalances } from './accountBalances';
import { Accounts } from './accounts';
import { Base } from './base';
import { Contacts } from './contacts';
import { Groups } from './groups';
import { applyMixins } from './utils';

class Fiken extends Base {}
interface Fiken extends Contacts, Accounts, AccountBalances, Groups {}
applyMixins(Fiken, [Contacts, Accounts, AccountBalances, Groups]);

export default Fiken;
