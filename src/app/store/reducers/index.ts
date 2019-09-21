import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as ProductReducer from './product.reducer';

export interface state {
    product: ProductReducer.ProductState
}

export const reducers: ActionReducerMap<state> = {
    product: ProductReducer.reducer
}

export const selectProductState = createFeatureSelector("product");

export const getProductStateProducts = createSelector(selectProductState, ProductReducer.getProducts);
export const getProductStateSearchResult = createSelector(selectProductState, ProductReducer.getSearchResult);
export const getProductStateBrandFilter = createSelector(selectProductState, ProductReducer.getBrandFilter);
export const getProductStateCategoryFilter = createSelector(selectProductState, ProductReducer.getCategoryFilter);
export const getProductStateChosenProduct = createSelector(selectProductState, ProductReducer.getChosenProduct);
export const getProductStatePage = createSelector(selectProductState, ProductReducer.getCurrentPage);