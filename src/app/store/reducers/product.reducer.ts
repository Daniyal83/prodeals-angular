import * as ProductActions from '../actions/product.actions';
import { PRODUCTS } from '../../all-products/products';
import { Phone } from '../../models/Phone';

export interface ProductState {
    products: Phone[],
    searchResult: Phone[],
    brandFilter: string,
    categoryFilter: string,
    chosenProduct: Phone,
    page: number
}

export const initialState: ProductState = {
    products: PRODUCTS,
    searchResult: [],
    brandFilter: '',
    categoryFilter: '',
    chosenProduct: null,
    page: 1
} 

export function reducer(state = initialState, action: ProductActions.ProductActions): ProductState {
    switch(action.type) {
        case ProductActions.ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]};
        case ProductActions.SEARCH_PRODUCT:
            const searchValue = action.payload.toLowerCase();
            const searchResult = state.products.filter(item => item.title.toLowerCase().indexOf(searchValue) !== -1 || item.brand.indexOf(searchValue) !== -1);
            return {...state, searchResult};
        case ProductActions.SET_BRANDFILTER:
            const filter_b = action.payload.toLowerCase();
            const brandFilter = filter_b !== 'все' ? filter_b : '';
            return {...state, brandFilter}
        case ProductActions.SET_CATEGORYFILTER:
            const filter_c = action.payload.toLowerCase();
            const categoryFilter = filter_c !== 'все' ? filter_c : '';
            return {...state, categoryFilter}
        case ProductActions.SET_PRODUCT_DETAILS:
            return {...state, chosenProduct: action.payload}
        case ProductActions.SET_PAGE:
            return {...state, page: action.payload}
        default:
            return state;
    }
}

export const getProducts = (state: ProductState) => state.products;
export const getSearchResult = (state: ProductState) => state.searchResult;
export const getBrandFilter = (state: ProductState) => state.brandFilter;
export const getCategoryFilter = (state: ProductState) => state.categoryFilter;
export const getChosenProduct = (state: ProductState) => state.chosenProduct;
export const getCurrentPage = (state: ProductState) => state.page;

