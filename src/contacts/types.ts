import { Address } from '../types';

export interface Contact {
	contactId: number;
	createdDate: string;
	lastModifiedDate: string;
	name: string;
	customerNumber: number;
	customerAccountCode: string;
	customer: boolean;
	supplier: boolean;
	contactPerson: ContactPerson[];
	notes: Note[];
	currency: string;
	language: string;
	inactive: boolean;
	address: Address;
}

export interface ContactPerson {
	contactPersonId: number;
	name: string;
	email: string;
	phoneNumber: string;
	address: Address;
}

export interface Note {
	author: string;
	note: string;
}
