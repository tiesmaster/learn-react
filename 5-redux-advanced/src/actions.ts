import { VisibilityFilter } from './types';

export enum TypeKeys {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER',
    OTHER_ACTION = '__any_other_action_type__'
}

export interface AddTodoAction {
    type: TypeKeys.ADD_TODO;
    text: string;
}

export interface ToggleTodoAction {
    type: TypeKeys.TOGGLE_TODO;
    index: number;
}

export interface SetVisibilityFilterAction {
    type: TypeKeys.SET_VISIBILITY_FILTER;
    filter: VisibilityFilter;
}

export interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
}

export type ActionTypes =
    | AddTodoAction
    | ToggleTodoAction
    | SetVisibilityFilterAction
    | OtherAction;

export function addTodo(text: string): AddTodoAction {
    return { type: TypeKeys.ADD_TODO, text };
}

export function toggleTodo(index: number): ToggleTodoAction {
    return { type: TypeKeys.TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter: VisibilityFilter): SetVisibilityFilterAction {
    return { type: TypeKeys.SET_VISIBILITY_FILTER, filter };
}