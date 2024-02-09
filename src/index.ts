import { Base } from './base';
import { Contacts } from './contacts';
import { applyMixins } from './utils';

class Fiken extends Base {}
interface Fiken {}
applyMixins(Fiken, [Contacts]);

export default Fiken;
