import * as React from 'react';

type PostListProps = {
    id: number;
    title: string;
};

const SubredditPost = ({ id, title }: PostListProps) => (
    <li>{id}: {title}</li>
);

export default SubredditPost;