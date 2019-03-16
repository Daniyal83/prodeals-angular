import * as ProductActions from '../actions/product.actions';
import { PRODUCTS } from '../../all-products/products';
import { Product } from '../../models/Product';

export interface ProductState {
    products: Product[],
    searchResult: Product[]
}

export const initialState: ProductState = {
    products: PRODUCTS,
    searchResult: []
} 

export function reducer(state = initialState, action: ProductActions.ProductActions): ProductState {
    switch(action.type) {
        case ProductActions.ADD_PRODUCT:
            const { products } = state;
            products.push(action.payload); 
            return {...state, products};
        case ProductActions.SEARCH_PRODUCT:
            const searchValue = action.payload.toLowerCase();
            const searchResult = state.products.filter(item => item.brand.indexOf(searchValue) !== -1);
            return {...state, searchResult};
        default:
            return state;
    }
}

export const getProducts = (state: ProductState) => state.products;
export const getSearchResult = (state: ProductState) => state.searchResult;
