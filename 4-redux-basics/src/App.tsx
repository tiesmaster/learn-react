import * as React from 'react';
import { Store } from 'redux';

import { State } from './State';

export class App extends React.Component<{ store: Store<State | undefined> }, { stateHistory: State[] }> {
    constructor(props: { store: Store<State> }) {
        super(props);
        this.state = {
            stateHistory: []
        };

        const store = this.props.store;
        store.subscribe(() => {
            this.setState((prevState => {
                return { stateHistory: [...prevState.stateHistory, store.getState()!] };
            }));
        });
    }
    render() {
        return (
            <div>
                {this.state.stateHistory.map((item, i) => (
                    <div>
                        <h1>Version {i}</h1>
                        {this.stateToJsx(item)}
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
    stateToJsx(state: State) {
        return (
            <div>
                <h3>Visibility filter: {state.visibilityFilter}</h3>
                <h3>TODOs</h3>
                <ul>
                    {state.todos.map(ti => (
                        <li>{ti.text} (COMPLETED: {ti.completed ? 'TRUE' : 'FALSE'})</li>
                    ))}
                </ul>
            </div>
        );
    }
}