import * as React from 'react';
import VisibleSubredditPostList from './containers/VisibleSubredditPostList';
import Header from './containers/Header';

const App = () => (
    <div>
        <Header />
        <VisibleSubredditPostList />
    </div>
);

export default App;