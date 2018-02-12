import { PostListProps } from './../components/SubredditPostList';
import { connect } from 'react-redux';

import State from '../state';
import { SubredditState } from '../types';
import SubredditPostList from '../components/SubredditPostList';

const getVisiblePosts = (subredditState: SubredditState) => {
    return subredditState.items;
};

const getLoading = (subredditState: SubredditState) => {
    return subredditState.isFetching;
};

const getSelectedSubredditState = (state: State) => {
    return state.postsBySubreddit[state.selectedSubreddit];
};

const mapStateToProps = (state: State): PostListProps => {
    return {
        posts: getVisiblePosts(getSelectedSubredditState(state)),
        isLoading: getLoading(getSelectedSubredditState(state))
    };
};

const VisibleSubredditPostList = connect(mapStateToProps)(SubredditPostList);

export default VisibleSubredditPostList;