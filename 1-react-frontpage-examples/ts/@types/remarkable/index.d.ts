declare module 'remarkable' {

    // export interface readOptions {
    //     filter?: RegExp | Filter,
    //     dirTransform?: DirTransform,
    //     fileTransform?: FileTransform
    // }

    // export type Filter = (file: File) => boolean;
    // export type DirTransform = (file: File, value: any) => any;
    // export type FileTransform = (file: File) => any;

    // export function readDirectory(dir: string, options?: readOptions): object;

    export default class Remarkable {
        constructor();

        render(input: string): string
    }
}