import { Base } from './base';
import { applyMixins } from './utils';

class Fiken extends Base {}
interface Fiken {}
applyMixins(Fiken, []);

export default Fiken;
