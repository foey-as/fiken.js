import { Base } from '../base';
import { Contact, ContactPerson } from './types';

export class Contacts extends Base {
	getContacts() {
		return this.request<Contact[]>('/contacts');
	}

	getContact(contactId: number) {
		return this.request<Contact>(`/contacts/${contactId}`);
	}

	createContact() {}

	updateContact() {}

	getContactPersons(contactId: number) {
		return this.request<ContactPerson[]>(
			`/contacts/${contactId}/contactPerson`
		);
	}

	createContactPersonAttachment() {}

	getContactPerson(contactId: number, contactPersonId: number) {
		return this.request<ContactPerson>(
			`/contacts/${contactId}/contactPerson/${contactPersonId}`
		);
	}

	createContactPerson() {}

	updateContactPerson() {}

	deleteContactPerson() {}
}
