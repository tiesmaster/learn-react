import * as React from 'react';

import HeaderContainer from '../containers/HeaderContainer';

export type HeadersProps = {
    headers: string[];
};

const Headers = ({ headers }: HeadersProps) => (
    <div>
        {headers.map((header, index) => (
            <HeaderContainer key={index} subreddit={header} />
        ))}
    </div>
);

export default Headers;