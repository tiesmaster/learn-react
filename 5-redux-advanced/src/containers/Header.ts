import { connect } from 'react-redux';

import State from '../state';
import Headers, { HeadersProps } from '../components/Headers';

const getHeaders = (state: State): string[] => {
    const headers: string[] = [];
    for (const subredditKey in state.postsBySubreddit) {
        if (state.postsBySubreddit.hasOwnProperty(subredditKey)) {
            headers.push(subredditKey);
        }
    }
    return headers;
};

const mapStateToProps = (state: State): HeadersProps => {
    return {
        headers: getHeaders(state)
    };
};

const Header = connect(mapStateToProps)(Headers);

export default Header;