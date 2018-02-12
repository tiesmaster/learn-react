import * as React from 'react';

import SubredditHeader from './SubredditHeader';

export type HeadersProps = {
    headers: {
        subredditName: string;
        isSelected: boolean
    }[];
};

const Headers = ({ headers }: HeadersProps) => (
    <div>
        {headers.map((header, index) => (
            <SubredditHeader key={index} {...header} />
        ))}
    </div>
);

export default Headers;