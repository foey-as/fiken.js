export interface CompaniesParams {
	page?: number;
	pageSize?: number;
	sortBy?: string;
}

export interface Company {
	name: string;
	slug: string;
	organizationNumber: string;
	vatType: string;
	address: Address;
	phoneNumber: string;
	email: string;
	creationDate: string;
	hasApiAccess: boolean;
	testCompany: boolean;
	accountingStartDate: string;
}

export interface Address {
	streetAddress: string;
	streetAddressLine2: string;
	city: string;
	postCode: string;
	country: string;
}
