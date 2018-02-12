import { SubredditState } from './types';

export default interface State {
    readonly selectedSubreddit: string;
    readonly postsBySubreddit: {
        readonly [n: string]: SubredditState
    };
}

// const s: State = {
//     selectedSubreddit: 'frontend',
//     postsBySubreddit: {
//         frontend: {
//             isFetching: true,
//             didInvalidate: false,
//             items: []
//         },
//         reactjs: {
//             isFetching: false,
//             didInvalidate: false,
//             lastUpdated: 1439478405547,
//             items: [
//                 {
//                     id: 42,
//                     title: 'Confusion about Flux and Relay'
//                 },
//                 {
//                     id: 500,
//                     title: 'Creating a Simple Application Using React JS and Flux Architecture'
//                 }
//             ]
//         }
//     }
// };

// s.postsBySubreddit.reactjs = {
//     isFetching: true,
//     didInvalidate: false,
//     items: []
// };

// tslint:disable-next-line:no-console
console.log(s);