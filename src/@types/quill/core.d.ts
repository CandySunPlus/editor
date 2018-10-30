declare module 'quill/core' {
    import Quill from 'quill';
    export default Quill;
}

declare module 'quill/blots/block' {
    export class BlockEmbed {
        static create(value?: any);
        domNode: HTMLElement;
        format(name: string, value?: any);
    }
}
