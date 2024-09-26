import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatPrice = (amount: number) => {
	return amount.toLocaleString("en-IN", {
		style: "currency",
		currency: "INR",
		currencySign: "standard",
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	});
};
