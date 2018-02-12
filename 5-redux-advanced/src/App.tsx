import * as React from 'react';
import SubredditInput from './containers/SubredditInput';
import VisibleSubredditPostList from './containers/VisibleSubredditPostList';
import Header from './containers/Header';

const App = () => (
    <div>
        <SubredditInput />
        <Header />
        <VisibleSubredditPostList />
    </div>
);

export default App;