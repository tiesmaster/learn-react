import * as React from 'react';

import { Post } from '../types';
import SubredditPost from './SubredditPost';

export type PostListProps = { isLoading: boolean; posts: Post[] };

const SubredditPostList = ({ isLoading, posts }: PostListProps) => {
    if (isLoading) {
        return <div>IS LOADING!!!</div>;
    } else {
        return <ul>{posts.map((post, index) => <SubredditPost key={index} {...post} />)}</ul>;
    }
};

export default SubredditPostList;
