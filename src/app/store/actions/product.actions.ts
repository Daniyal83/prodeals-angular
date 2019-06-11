import { Action } from '@ngrx/store';
import { Product } from '../../models/Product';

export const ADD_PRODUCT = '[Product] Add'
export const REMOVE_PRODUCT = '[Product] Remove'
export const SEARCH_PRODUCT = '[Product] Search'
export const SET_BRANDFILTER = 'Set brand filter'

export class AddProduct implements Action {
    readonly type = ADD_PRODUCT
    constructor(public payload: Product) {}
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

export type ProductActions = AddProduct | SearchProduct | RemoveProduct | SetBrandFilter
