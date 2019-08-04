export interface Phone {
    id?: number;
    category: string;
    brand: string;
    title: string;
    price: number;
    colors: string[];
    photo: string;
    special: boolean;
    ram?: string;
    rom?: string;
    href?: string;
    isDiscount?: boolean;
}