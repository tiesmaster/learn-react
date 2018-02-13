import * as React from 'react';

export type SubredditHeaderProps = {
    subredditName: string;
    isSelected: boolean;
    onClick: () => void;
};

const SubredditHeader = ({ subredditName, isSelected, onClick }: SubredditHeaderProps) => (
    <span
        style={{
            fontWeight: isSelected ? 'bold' : 'normal'
        }}
        onClick={onClick}
    >
        {subredditName}
    </span>
);

export default SubredditHeader;