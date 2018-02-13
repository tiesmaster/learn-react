import { connect } from 'react-redux';

import State from '../state';
import SubredditHeader, { SubredditHeaderProps } from '../components/SubredditHeader';

type HeaderContainerProps = { subreddit: string };

const mapStateToProps = (state: State, ownProps: HeaderContainerProps): SubredditHeaderProps => {
    return {
        subredditName: ownProps.subreddit,
        isSelected: state.selectedSubreddit === ownProps.subreddit
    };
};

const HeaderContainer = connect(mapStateToProps)(SubredditHeader);

export default HeaderContainer;