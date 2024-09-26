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

export interface PropertyList {
	property: Property[];
}
