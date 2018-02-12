import * as React from 'react';

import { Post } from '../types';
import SubredditPost from './SubredditPost';

type PostListProps = { posts: Post[] };

const SubredditPostList = ({ posts }: PostListProps) => (
    <ul>
        {posts.map((post, index) => (
            <SubredditPost key={index} {...post} />
        ))}
    </ul>
);

export default SubredditPostList;