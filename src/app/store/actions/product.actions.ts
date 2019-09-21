import { Action } from '@ngrx/store';
import { Phone } from '../../models/Phone';

export const ADD_PRODUCT = '[Product] Add'
export const REMOVE_PRODUCT = '[Product] Remove'
export const SEARCH_PRODUCT = '[Product] Search'
export const SET_BRANDFILTER = 'Set brand filter'
export const SET_CATEGORYFILTER = 'Set category filter'
export const SET_PRODUCT_DETAILS = '[Product] Set details'
export const SET_PAGE = 'Set page fo offers'

export class AddProduct implements Action {
    readonly type = ADD_PRODUCT
    constructor(public payload: Phone) {}
}

export class SearchProduct implements Action {
    readonly type = SEARCH_PRODUCT
    constructor(public payload: string) {}
}

export class RemoveProduct implements Action {
    readonly type = REMOVE_PRODUCT
    constructor(public payload: number) {}
}

export class SetBrandFilter implements Action {
    readonly type = SET_BRANDFILTER
    constructor(public payload: string) {}
}

export class SetCategoryFilter implements Action {
    readonly type = SET_CATEGORYFILTER
    constructor(public payload: string) {}
}

export class SetProductDetails implements Action {
    readonly type = SET_PRODUCT_DETAILS
    constructor(public payload: Phone) {}
}

export class SetPage implements Action {
    readonly type = SET_PAGE
    constructor(public payload: number) {}
}

export type ProductActions = AddProduct | SearchProduct | RemoveProduct | SetBrandFilter | SetCategoryFilter | SetProductDetails | SetPage
