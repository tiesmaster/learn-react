import * as React from 'react';

export type LinkProps = {
    active: boolean,
    children: React.ReactNode,
    onClick: () => void
};

const Link = ({ active, children, onClick }: LinkProps) => {
    if (active) {
        return <span>{children}</span>;
    }
    return (
        <a
            href=""
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
    );
};

export default Link;