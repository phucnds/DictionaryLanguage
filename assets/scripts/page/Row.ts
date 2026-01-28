import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Row')
export class Row extends Component {
    @property(Label) private lblNo: Label = null;
    @property(Label) private lblName: Label = null;
    @property(Label) private lblPos: Label = null;
    @property(Label) private lblSentences: Label = null;
    @property(Label) private lblIPA: Label = null;
    @property(Node) private btnPlay: Node = null;
    @property(Node) private btnPause: Node = null;
}


