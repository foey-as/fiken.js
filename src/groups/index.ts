import { Base } from '../base';

export class Groups extends Base {
	getGroups() {
		return this.request<string[]>('/groups');
	}
}
