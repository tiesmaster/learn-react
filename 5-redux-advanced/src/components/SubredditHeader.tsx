import * as React from 'react';

type SubredditHeaderProps = {
    subredditName: string;
    isSelected: boolean;
};

const SubredditHeader = ({ subredditName, isSelected }: SubredditHeaderProps) => (
    <span
        style={{
            fontWeight: isSelected ? 'bold' : 'normal'
        }}
    >
        {subredditName}
    </span>
);

export default SubredditHeader;