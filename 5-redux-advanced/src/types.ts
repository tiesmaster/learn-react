export interface Post {
    readonly id: number;
    readonly title: string;
}

export interface SubredditState {
    readonly isFetching: boolean;
    readonly didInvalidate: boolean;
    readonly lastUpdated?: number;
    readonly items: Post[];
}