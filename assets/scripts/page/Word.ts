import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


export interface WordData {
    no: number;
    word: string;
    pos: string;
    sentences: string;
    ipa: string;
    meaning: string;
    sound: string;
}

@ccclass('Word')
export class Word extends Component {
    start() {

    }

    update(deltaTime: number) {

    }
}


