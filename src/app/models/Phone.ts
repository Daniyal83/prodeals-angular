export interface Phone {
    id?: number;
    category: string;
    rusCategory: string;
    brand: string;
    title: string;
    price: any;
    colors: string[];
    cameras?: string;
    accumulator?: string,
    dimensions?: string,
    photo: string;
    special: boolean;
    ram?: string;
    rom?: string;
    href?: string;
    isDiscount?: boolean;
}