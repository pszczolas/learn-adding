export class FrameCell {
    char: string;
    animation: animationStrategy;
    cssClass: string;
    constructor(char: string, animation: animationStrategy = animationStrategy.NONE, cssClass = '') {
        this.char = char;
        this.animation = animation;
        this.cssClass = cssClass;
    }
    shouldFade() {
        return this.animation === animationStrategy.FADE_IN;
    }
    shouldBG() {
        return this.animation === animationStrategy.BG;
    }
    shouldDontAnimate() {
        return this.animation === animationStrategy.NONE;
    }
}
export enum animationStrategy {
    NONE,
    FADE_IN,
    BG
}