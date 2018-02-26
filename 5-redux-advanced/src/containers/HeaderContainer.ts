import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import State from '../state';
import SubredditHeader from '../components/SubredditHeader';
import { selectSubreddit } from '../actions';

type HeaderContainerProps = { subreddit: string };

// import { SubredditHeaderProps } from '../components/SubredditHeader';
// TODO: figure out how to explicitly define the return type of this method, and the mapDispatchToProps,
// so you get type safety on the mapStateToProps/mapDispatchToProps functions
const mapStateToProps = (state: State, ownProps: HeaderContainerProps) => {
    return {
        subredditName: ownProps.subreddit,
        isSelected: state.selectedSubreddit === ownProps.subreddit
    };
};

const mapDispatchToProps = (dispatch: Dispatch<State>, ownProps: HeaderContainerProps) => {
    return {
        onClick: () => {
            dispatch(selectSubreddit(ownProps.subreddit));
        }
    };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(SubredditHeader);

export default HeaderContainer;
