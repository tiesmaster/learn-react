import * as React from 'react';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';

const App = () => (
    <div>
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;