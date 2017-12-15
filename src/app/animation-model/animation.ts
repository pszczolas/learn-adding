import { Frame } from "./frame";
import { FrameCell } from "./frame-cell";
import * as _ from "lodash";

export class Animation {
    frames: Frame[] = [];
    constructor(frames: Frame[] = []) {
        this.frames = frames;
    }
    public getLastFrame(): Frame {
        return _.cloneDeep(this.frames[this.frames.length - 1])
    }
    public addFrame(nextFrame: Frame) {
        this.frames.push(nextFrame);
    }
    public addFrames(nextFrames: Frame[], shouldExtendLastFrame: boolean = true) {
        if(shouldExtendLastFrame) {
            let last = this.getLastFrame();
            for(let currentFrame of nextFrames) {
                let newFrame = _.cloneDeep(last);
                newFrame.content.push(...currentFrame.content);
                this.frames.push(newFrame);
            }
            return
        }
        this.frames.push(...nextFrames);
    }
    public addNewFrame(content: FrameCell[][]) {
        this.frames.push(new Frame(content));
    }
    public getFrameLines(index): FrameCell[][] {
        return this.frames[index].content;
    }
}