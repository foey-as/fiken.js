import { Base } from '../base';
import { contact, contactPerson } from '../schemas';

export class Contacts extends Base {
	getContacts() {
		return this.request<contact[]>('/contacts');
	}

	createContact(contact: contact) {
		return this.request<contact>('/contacts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(contact),
		});
	}

	getContact(contactId: number) {
		return this.request<contact>(`/contacts/${contactId}`);
	}

	updateContact(contactId: number, updatedContact: contact) {
		return this.request<contact>(`/contacts/${contactId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedContact),
		});
	}

	getContactPersons(contactId: number) {
		return this.request<contactPerson[]>(
			`/contacts/${contactId}/contactPerson`
		);
	}

	createContactPersonAttachment() {
		throw new Error('Not implemented');
	}

	getContactPerson(contactId: number, contactPersonId: number) {
		return this.request<contactPerson>(
			`/contacts/${contactId}/contactPerson/${contactPersonId}`
		);
	}

	createContactPerson(contactId: number, contactPerson: contactPerson) {
		return this.request<void>(`/contacts/${contactId}/contactPerson`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(contactPerson),
		});
	}

	updateContactPerson(
		contactId: number,
		contactPersonId: number,
		contactPerson: contactPerson
	) {
		return this.request<void>(
			`/contacts/${contactId}/contactPerson/${contactPersonId}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(contactPerson),
			}
		);
	}

	deleteContactPerson(contactId: number, contactPersonId: number) {
		return this.request<void>(
			`/contacts/${contactId}/contactPerson/${contactPersonId}`,
			{
				method: 'DELETE',
			}
		);
	}
}
