import { connect } from 'react-redux';

import State from '../state';
import Headers, { HeadersProps } from '../components/Headers';

type header = {
    subredditName: string;
    isSelected: boolean
};

const getHeaders = (state: State): header[] => {
    const headers: header[] = [];
    for (const subredditKey in state.postsBySubreddit) {
        if (state.postsBySubreddit.hasOwnProperty(subredditKey)) {
            headers.push({ subredditName: subredditKey, isSelected: subredditKey === state.selectedSubreddit });
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