import Image from 'quill/formats/image';

export default class extends Image {
    static className = 'ql-block-image';
    static blotName = 'block-image';
}
