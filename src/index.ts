import Quill from 'quill/core';
import Video from 'quill/formats/video';
import BlockImage from './formats/block-image';
import './index.less';

Quill.register(Video);
Quill.register(BlockImage);

enum ActionType {
    ADD_IMAGE,
    ADD_VIDEO
}

class Editor {
    private quill: Quill;
    constructor(mountDom) {
        this.quill = new Quill(mountDom, {
            placeholder: 'placeholder...'
        });
    }

    bindAction(selector: string, action: ActionType) {
        const elem = document.querySelector(selector);
        if (elem) {
            switch (action) {
                case ActionType.ADD_IMAGE:
                    elem.addEventListener('click', this.addImage);
                case ActionType.ADD_VIDEO:
                    elem.addEventListener('click', this.addVideo);
            }
        }
    }

    addImage(url) {
        // add image
        this.quill.insertEmbed(0, 'block-image', url, 'api');
    }

    addVideo(url) {
        // add video
        this.quill.insertEmbed(0, 'video', url, 'api');
    }

    getContent() {
        return this.quill.getContents();
    }
}

const editor = new Editor('.editor-container');
const addImageBtn = document.querySelector('.add-image-btn');
const addVideoBtn = document.querySelector('.add-video-btn');
const getContentBtn = document.querySelector('.get-content-btn');

addImageBtn.addEventListener('click', () => {
    editor.addImage('https://statics.wehaowu.com/13210159056683009/2bba8687-eeae-44c5-a398-df9f2176f968.JPG');
});
addVideoBtn.addEventListener('click', () => {
    editor.addVideo('https://v.statics.wehaowu.com/13210159056683009/ccef0316-e700-45a8-8c7b-0ea82ac9fcb7.mp4');
});
getContentBtn.addEventListener('click', () => {
    const content = editor.getContent();
    console.log(content);
});
