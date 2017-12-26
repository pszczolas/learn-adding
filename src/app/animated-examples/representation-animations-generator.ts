import { Animation } from "../animation-model/animation";
import { Adding } from "../arithmetic/adding";
import { RepresentationConverter } from "../arithmetic/representation-converter";
import { Frame } from "../animation-model/frame";
import { animationStrategy } from "../animation-model/frame-cell";
import * as _ from "lodash";

export class RepresentationAnimation {
    representationConverter: RepresentationConverter = new RepresentationConverter();
    //przyjmuje liczbe dzisesiętną
    animateRepresentationU2(num: number, name: string = "X"): Animation{
        const addingLogic = new Adding();
        let inBN = num.toString(2).replace(".",",");;
        let inU1 = this.representationConverter.toU1(inBN);
        let eqAndPadSpaces = inBN.charAt(0)==="-" ? "=\xa0" : "=\xa0\xa0"; //hack to even binary and u1
        let f1 = new Frame();
        f1.appendLine("\xa0" + name + eqAndPadSpaces + inBN, animationStrategy.FADE_IN);
        f1.appendLine("");
        let f2 = new Frame();
        f2.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
        f2.appendLine("");
        f2.appendLine(name + "ᴼ=", animationStrategy.FADE_IN); 

        let frames: Frame[] = []
        for(let i = inU1.length - 1; i > -1; i--) {
            let fx = new Frame();
            fx.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
            fx.appendLine("");
            fx.appendLine(name + "ᴼ="); 
            fx.append("\xa0".repeat(i)); //spaces, none
            fx.append(inU1.charAt(i), animationStrategy.FADE_IN); //new digit, fade in
            fx.append(inU1.substring(i + 1)); //rest digit, none
            frames.push(fx);
        }
        let toU2steps: Frame[] = [];
        let inU2 = this.representationConverter.toU2(inBN);
        if(inU2 !== inU1) {
            let addOne1 = new Frame();
            addOne1.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
            addOne1.appendLine("");
            addOne1.appendLine(name + "ᴼ=" + inU1);
            let addOne2 = _.cloneDeep(addOne1);
            addOne1.appendLine("\xa0".repeat(3 + inU1.length - 2));       
            addOne1.append("+1", animationStrategy.FADE_IN);
            addOne2.appendLine("\xa0\xa0\xa0");
            addOne2.append("\xa0".repeat(inU1.length - 2) + "+1\xa0+", animationStrategy.NONE, "underline")
            let finalResult = _.cloneDeep(addOne2);
            let finalResult2 = _.cloneDeep(addOne2);
            finalResult.appendLine("\xa0\xa0\xa0" + inU2, animationStrategy.FADE_IN);
            finalResult2.appendLine(name + "ᴰ=", animationStrategy.FADE_IN);
            finalResult2.append(inU2);
            toU2steps.push(addOne1, addOne2, finalResult, finalResult2);
        } else {
            let result = new Frame();
            result.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
            result.appendLine("");
            result.appendLine(name + "ᴼ=" + inU1);
            result.appendLine(name + "ᴰ=" + inU2, animationStrategy.FADE_IN);
            toU2steps.push(result);
        }
        return new Animation([f1, f2, ...frames, ...toU2steps]);
    }
    animateRepresentationU1(num: number, name: string = "X"): Animation{
        const addingLogic = new Adding();
        let inBN = num.toString(2).replace(".",",");;
        let inU1 = this.representationConverter.toU1(inBN);
        let eqAndPadSpaces = inBN.charAt(0)==="-" ? "=\xa0" : "=\xa0\xa0"; //hack to even binary and u1
        let f1 = new Frame();
        f1.appendLine("\xa0" + name + eqAndPadSpaces + inBN, animationStrategy.FADE_IN);
        
        let f2 = new Frame();
        f2.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
        f2.appendLine(name + "ᴼ=", animationStrategy.FADE_IN); 

        let frames: Frame[] = []
        for(let i = inU1.length - 1; i > -1; i--) {
            let fx = new Frame();
            fx.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
            fx.appendLine(name + "ᴼ="); 
            fx.append("\xa0".repeat(i)); //spaces, none
            fx.append(inU1.charAt(i), animationStrategy.FADE_IN); //new digit, fade in
            fx.append(inU1.substring(i + 1)); //rest digit, none
            frames.push(fx);
        }
        return new Animation([f1, f2, ...frames]);
    }
    animateRepresentationZM(num: number, name: string = "X"): Animation{
        const addingLogic = new Adding();
        let inBN = num.toString(2).replace(".",",");;
        let inSM = this.representationConverter.toSignModule(inBN);
        let eqAndPadSpaces = inBN.charAt(0)==="-" ? "=\xa0" : "=\xa0\xa0"; //hack to even binary and u1
        let f1 = new Frame();
        f1.appendLine("\xa0" + name + eqAndPadSpaces + inBN, animationStrategy.FADE_IN);
        
        let f2 = new Frame();
        f2.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
        f2.appendLine(name + "ᴹ=", animationStrategy.FADE_IN); 

        let f3 = new Frame();
        f3.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
        f3.appendLine(name + "ᴹ=" + "\xa0\xa0"); 
        f3.append(inSM.substring(2), animationStrategy.FADE_IN);

        let f4 = new Frame();
        f4.appendLine("\xa0" + name + eqAndPadSpaces + inBN);
        f4.appendLine(name + "ᴹ=");
        f4.append(inSM.substring(0, 2), animationStrategy.FADE_IN) 
        f4.append(inSM.substring(2));

        return new Animation([f1, f2, f3, f4]);
    }


}