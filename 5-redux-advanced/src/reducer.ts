import { combineReducers } from 'redux';

import {
    TypeKeys,
    ActionTypes,
    SelectSubredditAction,
    InvalidateSubredditAction,
    RequestPostsAction,
    ReceivePostsAction
} from './actions';
import { SubredditState } from './types';
import State from './state';

function selectedSubreddit(state: string = 'reactjs', action: SelectSubredditAction): string {
    switch (action.type) {
        case TypeKeys.SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
}

function posts(
    state: SubredditState = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action: InvalidateSubredditAction | RequestPostsAction | ReceivePostsAction
): SubredditState {
    switch (action.type) {
        case TypeKeys.INVALIDATE_SUBREDDIT:
            const b = { ...state, didInvalidate: true };
            return b;
        case TypeKeys.REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case TypeKeys.RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            };
        default:
            return state;
    }
}

function postsBySubreddit(state: State | {} = {}, action: ActionTypes) {
    switch (action.type) {
        case TypeKeys.INVALIDATE_SUBREDDIT:
        case TypeKeys.RECEIVE_POSTS:
        case TypeKeys.REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit
});

export default rootReducer;