import * as ProductActions from '../actions/product.actions';
import { PRODUCTS } from '../../all-products/products';
import { Phone } from '../../models/Phone';

export interface ProductState {
    products: Phone[],
    searchResult: Phone[],
    brandFilter: string,
    categoryFilter: string
}

export const initialState: ProductState = {
    products: PRODUCTS,
    searchResult: [],
    brandFilter: '',
    categoryFilter: ''
} 

export function reducer(state = initialState, action: ProductActions.ProductActions): ProductState {
    switch(action.type) {
        case ProductActions.ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]};
        case ProductActions.SEARCH_PRODUCT:
            const searchValue = action.payload.toLowerCase();
            const searchResult = state.products.filter(item => item.brand.indexOf(searchValue) !== -1);
            return {...state, searchResult};
        case ProductActions.SET_BRANDFILTER:
            const filter_b = action.payload.toLowerCase();
            const brandFilter = filter_b !== 'all' ? filter_b : '';
            return {...state, brandFilter}
        case ProductActions.SET_CATEGORYFILTER:
            const filter_c = action.payload.toLowerCase();
            const categoryFilter = filter_c !== 'all' ? filter_c : '';
            return {...state, categoryFilter}
        default:
            return state;
    }
}

export const getProducts = (state: ProductState) => state.products;
export const getSearchResult = (state: ProductState) => state.searchResult;
export const getBrandFilter = (state: ProductState) => state.brandFilter;
export const getCategoryFilter = (state: ProductState) => state.categoryFilter;

