import { Base } from '../base';
import { contact, contactPerson } from '../schemas';

export class Contacts extends Base {
	getContacts() {
		return this.request<contact[]>('/contacts');
	}

	getContact(contactId: number) {
		return this.request<contact>(`/contacts/${contactId}`);
	}

	createContact() {}

	updateContact() {}

	getContactPersons(contactId: number) {
		return this.request<contactPerson[]>(
			`/contacts/${contactId}/contactPerson`
		);
	}

	createContactPersonAttachment() {}

	getContactPerson(contactId: number, contactPersonId: number) {
		return this.request<contactPerson>(
			`/contacts/${contactId}/contactPerson/${contactPersonId}`
		);
	}

	createContactPerson() {}

	updateContactPerson() {}

	deleteContactPerson() {}
}
