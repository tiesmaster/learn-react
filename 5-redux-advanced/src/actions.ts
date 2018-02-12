import { Dispatch } from 'redux';

import { Post } from './types';
import State from './state';

import { ThunkAction } from 'redux-thunk';

export enum TypeKeys {
    SELECT_SUBREDDIT = 'SELECT_SUBREDDIT',
    INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT',
    REQUEST_POSTS = 'REQUEST_POSTS',
    RECEIVE_POSTS = 'RECEIVE_POSTS',
    OTHER_ACTION = '__any_other_action_type__'
}

export interface SelectSubredditAction {
    type: TypeKeys.SELECT_SUBREDDIT;
    subreddit: string;
}

export interface InvalidateSubredditAction {
    type: TypeKeys.INVALIDATE_SUBREDDIT;
    subreddit: string;
}

export interface RequestPostsAction {
    type: TypeKeys.REQUEST_POSTS;
    subreddit: string;
}

export interface ReceivePostsAction {
    type: TypeKeys.RECEIVE_POSTS;
    subreddit: string;
    posts: Post[];
    receivedAt: number;
}

export interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
}

export type ActionTypes =
    | SelectSubredditAction
    | InvalidateSubredditAction
    | RequestPostsAction
    | ReceivePostsAction
    | OtherAction;

export function selectSubreddit(subreddit: string): SelectSubredditAction {
    return { type: TypeKeys.SELECT_SUBREDDIT, subreddit };
}

export function invalidateSubreddit(subreddit: string): InvalidateSubredditAction {
    return { type: TypeKeys.INVALIDATE_SUBREDDIT, subreddit };
}

export function requestPosts(subreddit: string): RequestPostsAction {
    return { type: TypeKeys.REQUEST_POSTS, subreddit };
}

// tslint:disable-next-line:no-any
export function receivePosts(subreddit: string, json: any): ReceivePostsAction {
    return {
        type: TypeKeys.RECEIVE_POSTS,
        subreddit,
        // tslint:disable-next-line:no-any
        posts: json.data.children.map((child: any) => child.data),
        receivedAt: Date.now()
    };
}

export function fetchPosts(subreddit: string): ThunkAction<Promise<ReceivePostsAction>, State, void> {
    return function (dispatch: Dispatch<State>) {
        dispatch(requestPosts(subreddit));
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(
                response => response.json(),
                // tslint:disable-next-line:no-console
                error => console.log('An error occured.', error)
            )
            .then(json =>
                dispatch(receivePosts(subreddit, json)));
    };
}