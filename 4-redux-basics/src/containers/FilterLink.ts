import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';
import State from '../State';

type FilterLinkProps = { filter: string };

const mapStateToProps = (state: State, ownProps: FilterLinkProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch: Dispatch<State>, ownProps: FilterLinkProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;