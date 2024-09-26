export interface Property {
	id: string;
	name: string;
	area: string;
	address: string;
	city: string;
	image: string;
	type: string;
	floorspace: number;
	beds: number;
	baths: number;
	price: number;
	parking: number;
	construction: string[];
}

export type Cart = {
	id: string;
	items: CartItem[];
	userId: string;
};

export interface CartItem {
	propertyId: string;
	quantity: number;
	cartId: string;
}

export interface PropertyList {
	property: Property[];
}
