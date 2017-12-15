import { FrameCell, animationStrategy } from "./frame-cell";

export class Frame {
    content: FrameCell[][];
    constructor(content: FrameCell[][] = []) {
        this.content = content;
    }
    append(chars: string, animation: animationStrategy = animationStrategy.NONE, cssClass: string = '') {
        let line: FrameCell[] = [];
        let charsArray = chars.split('');
        for(let char of charsArray) {
            line.push(new FrameCell(char, animation, cssClass));
        }
        this.content[this.content.length - 1] = this.content[this.content.length - 1].concat(line);
    }
    appendLine(chars: string, animation: animationStrategy = animationStrategy.NONE) {
        let line: FrameCell[] = [];
        let charsArray = chars.split('');
        for(let char of charsArray) {
            line.push(new FrameCell(char, animation));
        }
        this.content.push(line);
    }
    addLineWithCells(line: FrameCell[]) {
        this.content.push(line);
    }
}