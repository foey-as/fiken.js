import { Base } from '../base';
import {
	product,
	productSalesReportRequest,
	productSalesReportResult,
} from '../schemas';

const resourceName = 'products';

export class Products extends Base {
	getProducts() {
		return this.request<product[]>(`/${resourceName}`);
	}

	createProduct(product: product) {
		return this.request<void>(`/${resourceName}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product),
		});
	}

	getProduct(productId: number) {
		return this.request<product>(`/${resourceName}/${productId}`);
	}

	updateProduct(productId: number, updatedProduct: product) {
		return this.request<void>(`/${resourceName}/${productId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedProduct),
		});
	}

	deleteProduct(productId: number) {
		return this.request<void>(`/${resourceName}/${productId}`, {
			method: 'DELETE',
		});
	}

	salesReport(productSalesReportReq: productSalesReportRequest) {
		return this.request<productSalesReportResult>(
			`/${resourceName}/salesReport`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(productSalesReportReq),
			}
		);
	}
}
