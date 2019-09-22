export interface Projector {
    id?: number;
    category: string;
    rusCategory: string;
    brand: string;
    title: string;
    photo: string;
    price?: any;
    colors?: string;
    brightness?: string;
    contrast?: string,
    projection?: string,
    resolution?: string;
    interfaces?: string;
    distance?: string;
    size?: string;
    dimensions?: string;
    weight?: string;
    other?: object;
    description?: string;
    href?: string;
    isDiscount?: boolean;
    additional?: string
}