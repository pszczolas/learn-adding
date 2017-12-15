import * as _ from "lodash";
import { Adding } from "../arithmetic/adding";
import { animationStrategy } from "../animation-model/frame-cell";
import { Animation } from "../animation-model/animation";
import { Frame } from "../animation-model/frame";
//TODO Utils from arithetic should not occur in this file
import { Utils } from "../arithmetic/utils";


export class AddingAnimation {
    toSubscript(numberString: string) {
        const subscript = '₀₁₂₃₄₅₆₇₈₉';
        return numberString
        .split('')
        .map(d => d = subscript[d])
        .join('');
    }


    //args to liczb dziesietne
    animateAdddingU1(augent: number, addend: number): Animation {
        //detekcja overflowu       
        const addingLogic = new Adding();
        let augentBN = augent.toString(2).replace(".",",");
        let addendBN = addend.toString(2).replace(".",",");      
        let augentEvenBN: string;
        let addendEvenBN: string;
        [augentEvenBN, addendEvenBN] = Utils.evenBinaryNumbers2(augentBN, addendBN);
        let addingResults = addingLogic.addInU1(augentEvenBN.trim(), addendEvenBN.trim());  

        let f1 = this.showAsBinary_First(augentBN, addendBN);
        
        let f2 = this.showAsEvenBinary_First(augentEvenBN, addendEvenBN);

        let f3 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f3.appendLine("Xᴼ=" + addingResults.augentRep, animationStrategy.FADE_IN); 
        f3.appendLine("Yᴼ=" + addingResults.addendRep, animationStrategy.FADE_IN); 

        let f4 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f4.appendLine("Xᴼ=" + addingResults.augentRep); 
        f4.appendLine("Yᴼ=");
        f4.append(addingResults.addendRep + "\xa0+", animationStrategy.NONE, "underline"); 

        let frames: Frame[] = []
             
        //przeniesienie
        let dotIndex = addingResults.carries.indexOf('.');
        let comaIndex = addingResults.carries.indexOf(',');
        let newCarries = comaIndex === -1 ?
        (addingResults.carries.charAt(0) + 
        addingResults.carries.charAt(dotIndex + 1) + "\xa0" +
        addingResults.carries.substring(dotIndex + 2))
        :
        (addingResults.carries.charAt(0) + 
        addingResults.carries.charAt(dotIndex + 1) + "\xa0" +
        addingResults.carries.substring(dotIndex + 2, comaIndex) +
        addingResults.carries.charAt(comaIndex + 1) + "\xa0" +
        addingResults.carries.substring(comaIndex + 2));
        if(comaIndex === -1) { //hack, to make ok animation for non fractinal numbers
            comaIndex = dotIndex;
            dotIndex = -2;
        }
        //koiec przeniesienia
        let carry = "";
        for(let i = addingResults.partialResult.length - 1, c = i; i > -1; i--, c--) {
            let fi = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
            //przenieisenie
            if(addingResults.partialResult.charAt(i) != ',' && addingResults.partialResult.charAt(i) != '.') {
                if(c <= dotIndex + 2) {
                    carry = "\xa0".repeat(c + "Xᴼ=".length - 3) + newCarries.substring(c - 2);
                } else if (c <= comaIndex + 1) {
                    carry = "\xa0".repeat(c + "Xᴼ=".length - 2) + newCarries.substring(c - 1);              
                } else {
                    carry = "\xa0".repeat(c + "Xᴼ=".length - 1) + newCarries.substring(c);
                }
                fi.appendLine(carry);
            } else {
                fi.appendLine(carry);
                c++;
            }
            //koiec przeniesienia
            fi.appendLine("Xᴼ=" + addingResults.augentRep); 
            fi.appendLine("Yᴼ=");
            fi.append(addingResults.addendRep + "\xa0+", animationStrategy.NONE, "underline"); 
            fi.appendLine("\xa0\xa0\xa0");
            fi.append("\xa0".repeat(i));
            fi.append(addingResults.partialResult.charAt(i), animationStrategy.FADE_IN);
            fi.append(addingResults.partialResult.substring(i + 1));
            frames.push(fi);
        }

        let f5 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f5.appendLine("Xᴼ=" + addingResults.augentRep); 
        f5.appendLine("Yᴼ=");
        f5.append(addingResults.addendRep + "\xa0+", animationStrategy.NONE, "underline"); 
        let overflow = _.cloneDeep(f5);
        f5.appendLine("\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);

        let fResult = _.cloneDeep(f5);
        

        let plusOne: Frame[] = []
        if(addingResults.carries.charAt(0) == '1') {
            let f6 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
            f6.appendLine("Xᴼ=" + addingResults.augentRep); 
            f6.appendLine("Yᴼ=");
            f6.append(addingResults.addendRep + "\xa0+", animationStrategy.NONE, "underline"); 
            f6.appendLine("\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
            f6.appendLine("\xa0".repeat("Yᴼ=".length));
            f6.append("\xa0".repeat(addingResults.partialResult.length - 2));
            f6.append("+1", animationStrategy.FADE_IN);

            let f7 =  this.showAsEvenBinary(augentEvenBN, addendEvenBN);
            f7.appendLine("Xᴼ=" + addingResults.augentRep); 
            f7.appendLine("Yᴼ=");
            f7.append(addingResults.addendRep + "\xa0+", animationStrategy.NONE, "underline"); 
            f7.appendLine("\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
            f7.appendLine("\xa0".repeat("Yᴼ=".length));
            f7.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", animationStrategy.NONE, "underline");
        
            let f8 =  this.showAsEvenBinary(augentEvenBN, addendEvenBN);
            f8.appendLine("Xᴼ=" + addingResults.augentRep); 
            f8.appendLine("Yᴼ=");
            f8.append(addingResults.addendRep + "\xa0+", animationStrategy.NONE, "underline"); 
            overflow = _.cloneDeep(f8);
            f8.appendLine("\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);
            f8.appendLine("\xa0".repeat("Yᴼ=".length));
            f8.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", animationStrategy.NONE, "underline");
            fResult = _.cloneDeep(f8);
            f8.appendLine("\xa0\xa0\xa0" + addingResults.result, animationStrategy.FADE_IN);
            fResult.appendLine("\xa0\xa0\xa0" + addingResults.result);
            plusOne.push(f6);
            plusOne.push(f7);
            plusOne.push(f8);   
        }
        let result: Frame[] = [];
        let fResult2 = _.cloneDeep(fResult);

//todo overflow
            fResult.append("=Zᴼ", animationStrategy.FADE_IN);
            fResult2.append("=Zᴼ");
            if(addingResults.result.charAt(0) === '0') {
                fResult2.append("=Zᴹ", animationStrategy.FADE_IN);
            }else{
                fResult2.appendLine("\xa0\xa0\xa0" + "1" + 
                Utils.invertOneAndZeros(addingResults.result.substring(1)) + "=Zᴹ", animationStrategy.FADE_IN);
            }
            result.push(fResult);
            result.push(fResult2);
        

        return new Animation([f1, f2, f3, f4, ...frames, f5, ...plusOne, ...result]);
    }
    animateAdddingU2(augent: number, addend: number): Animation {
        //detekcja overflowu
        const addingLogic = new Adding();
        let augentBN = augent.toString(2).replace(".",",");
        let addendBN = addend.toString(2).replace(".",",");      
        let augentEvenBN: string;
        let addendEvenBN: string;
        [augentEvenBN, addendEvenBN] = Utils.evenBinaryNumbers2(augentBN, addendBN);
        let addingResults = addingLogic.addInU2(augentEvenBN.trim(), addendEvenBN.trim());  

        let f1 = this.showAsBinary_First(augentBN, addendBN);
        
        let f2 = this.showAsEvenBinary_First(augentEvenBN, addendEvenBN);

        let f3 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f3.appendLine("Xᴰ=" + addingResults.augentRep, animationStrategy.FADE_IN); 
        f3.appendLine("Yᴰ=" + addingResults.addendRep, animationStrategy.FADE_IN); 
        f3.appendLine("");

        let f4 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f4.appendLine("Xᴰ=" + addingResults.augentRep); 
        f4.appendLine("Yᴰ=");
        f4.append(addingResults.addendRep + "\xa0+", animationStrategy.NONE, "underline"); 
        f4.appendLine("");

        let frames: Frame[] = []
             
        //przeniesienie
        let dotIndex = addingResults.carries.indexOf('.');
        let comaIndex = addingResults.carries.indexOf(',');
        let newCarries = comaIndex === -1 ?
        (addingResults.carries.charAt(0) + 
        addingResults.carries.charAt(dotIndex + 1) + "\xa0" +
        addingResults.carries.substring(dotIndex + 2))
        :
        (addingResults.carries.charAt(0) + 
        addingResults.carries.charAt(dotIndex + 1) + "\xa0" +
        addingResults.carries.substring(dotIndex + 2, comaIndex) +
        addingResults.carries.charAt(comaIndex + 1) + "\xa0" +
        addingResults.carries.substring(comaIndex + 2));
        if(comaIndex === -1) { //hack, to make ok animation for non fractinal numbers
            comaIndex = dotIndex;
            dotIndex = -2;
        }
        //koiec przeniesienia
        let carry = "";
        for(let i = addingResults.result.length - 1, c = i; i > -1; i--, c--) {
            let fi = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
            //przenieisenie
            if(addingResults.result.charAt(i) != ',' && addingResults.result.charAt(i) != '.') {
                if(c <= dotIndex + 2) {
                    carry = "\xa0".repeat(c + "Xᴰ=".length - 3) + newCarries.substring(c - 2);
                } else if (c <= comaIndex + 1) {
                    carry = "\xa0".repeat(c + "Xᴰ=".length - 2) + newCarries.substring(c - 1);              
                } else {
                    carry = "\xa0".repeat(c + "Xᴰ=".length - 1) + newCarries.substring(c);
                }
                fi.appendLine(carry);
            } else {
                fi.appendLine(carry);
                c++;
            }
            //koiec przeniesienia
            fi.appendLine("Xᴰ=" + addingResults.augentRep); 
            fi.appendLine("Yᴰ=");
            fi.append(addingResults.addendRep + "\xa0+", animationStrategy.NONE, "underline"); 
            fi.appendLine("\xa0\xa0\xa0");
            fi.append("\xa0".repeat(i));
            fi.append(addingResults.result.charAt(i), animationStrategy.FADE_IN);
            fi.append(addingResults.result.substring(i + 1));
            frames.push(fi);
        }

        let f5 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f5.appendLine("");
        f5.appendLine("Xᴰ=" + addingResults.augentRep); 
        f5.appendLine("Yᴰ=");
        f5.append(addingResults.addendRep + "\xa0+", animationStrategy.NONE, "underline"); 
        let reject = _.cloneDeep(f5);
        f5.appendLine("\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.result);

        reject.appendLine("\xa0");
        reject.append(addingResults.carries.charAt(0), animationStrategy.NONE, "line-through");
        reject.append("←" + addingResults.result)

        let results: Frame[] = [];
        let fResult = _.cloneDeep(reject);      
        fResult.append("=Zᴰ", animationStrategy.FADE_IN);
        let fResult2 = _.cloneDeep(reject);
        fResult2.append("=Zᴰ");
        let fResult3 = _.cloneDeep(fResult2);
        let fResult4 = new Frame();
        let fResult5 = new Frame();
        let fResult6 = new Frame();
        if(addingResults.result.charAt(0) === '0') {
            fResult2.append("=Zᴹ", animationStrategy.FADE_IN);
            results.push(fResult, fResult2);
        }else{
            fResult2.appendLine("");
            fResult2.appendLine("\xa0\xa0\xa0" + "1" + 
            Utils.invertOneAndZeros(addingResults.result.substring(1)), animationStrategy.FADE_IN);
            //here?
            fResult3.appendLine("");
            fResult3.appendLine("\xa0\xa0\xa0" + "1" + 
            Utils.invertOneAndZeros(addingResults.result.substring(1)));
            fResult3.appendLine("\xa0\xa0\xa0");
            fResult4 = _.cloneDeep(fResult3);
            fResult3.append("\xa0".repeat(addingResults.result.length - 2));
            fResult3.append("+1", animationStrategy.FADE_IN);
            fResult4.append("\xa0".repeat(addingResults.result.length - 2) + "+1\xa0+", animationStrategy.NONE, "underline");
            fResult5 = _.cloneDeep(fResult4);
            fResult5.appendLine("\xa0\xa0\xa0");
            fResult6 = _.cloneDeep(fResult5);
            //matko bosko..
            let resultInSM = Utils.addOne(Utils.invertOneAndZeros(addingResults.result));
            fResult5.append(resultInSM, animationStrategy.FADE_IN);
            fResult6.append(resultInSM);
            fResult6.append("=Zᴹ");
            results.push(fResult, fResult2, fResult3, fResult4, fResult5, fResult6);
        }
        
//todo overflow
        return new Animation([f1, f2, f3, f4, ...frames, f5, reject, ...results]);
    }
    animateAdddingSM(augent: number, addend: number): Animation {
        const addingLogic = new Adding();
        let augentBN = augent.toString(2).replace(".",",");
        let addendBN = addend.toString(2).replace(".",",");      
        let augentEvenBN: string;
        let addendEvenBN: string;
        [augentEvenBN, addendEvenBN] = Utils.evenBinaryNumbers2(augentBN, addendBN);
        let addingResults = addingLogic.addInSM(augentEvenBN.trim(), addendEvenBN.trim());  
        let signIndex = this.toSubscript(addingResults.specificInfo.signIndex);

        let f1 = this.showAsBinary_First(augentBN, addendBN);
        
        let f2 = this.showAsEvenBinary_First(augentEvenBN, addendEvenBN);

        let f3 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f3.appendLine("Xᴹ=" + addingResults.augentRep, animationStrategy.FADE_IN); 
        f3.appendLine("Yᴹ=" + addingResults.addendRep, animationStrategy.FADE_IN); 

        let f4 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f4.appendLine("Xᴹ=" + addingResults.augentRep); 
        f4.append("=x" + signIndex + ".|X|", animationStrategy.FADE_IN);
        f4.appendLine("Yᴹ=" + addingResults.addendRep); 
        f4.append("=y" + signIndex + ".|Y|", animationStrategy.FADE_IN);
        
        let f5 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        f5.appendLine("Xᴹ=" + addingResults.augentRep + "=x" + signIndex + ".|X|"); 
        f5.append(",\xa0x" + signIndex + "=" + addingResults.specificInfo.augentSign, animationStrategy.FADE_IN);
        f5.appendLine("Yᴹ=" + addingResults.addendRep + "=y" + signIndex + ".|Y|"); 
        f5.append(",\xa0y" + signIndex + "=" + addingResults.specificInfo.addendSign, animationStrategy.FADE_IN);
        
        let f6 = this.SM_checkPoint1(augentEvenBN, addendEvenBN, addingResults);
        f6.appendLine("");
        f6.appendLine("|X|=" + addingResults.specificInfo.augentAbs, animationStrategy.FADE_IN);
        f6.appendLine("|");
        let addendIsC1 = addingResults.specificInfo.augentSign != addingResults.specificInfo.addendSign;
        f6.append("Y", animationStrategy.FADE_IN, addendIsC1 ? "overline" : "");
        f6.append("|=" + addingResults.specificInfo.addendAbs, animationStrategy.FADE_IN);

        let f7 = this.SM_newCarries(augentEvenBN, addendEvenBN, addingResults);
        let xd: Frame[] = [];
        //
        if(addendIsC1) {
            let f8 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
            //pokaż przenieisenie
            f8.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←", animationStrategy.FADE_IN);
            f8.append(addingResults.partialResult);
            if(addingResults.carries.charAt(0) === '0') {
                //pokaz znak sumy
                let f9 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f9.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);            
                f9.appendLine("z" + signIndex + "=y" + signIndex, animationStrategy.FADE_IN);

                let f10 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f10.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);            
                f10.appendLine("z" + signIndex + "=y" + signIndex);
                f10.append("=" + addingResults.specificInfo.resultSign, animationStrategy.FADE_IN);

                //pokaz |Z|=~wynik
                let f11 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f11.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);            
                f11.appendLine("z" + signIndex + "=y" + signIndex + "=" + addingResults.specificInfo.addendSign);
                f11.appendLine("|Z|=", animationStrategy.FADE_IN);
                f11.append(addingResults.partialResult, animationStrategy.FADE_IN, "overline");

                //pokaz |Z|=~wynik=moduł sumy
                let f12 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f12.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);            
                f12.appendLine("z" + signIndex + "=y" + signIndex + "=" + addingResults.specificInfo.addendSign);
                f12.appendLine("|Z|=");
                f12.append(addingResults.partialResult, animationStrategy.NONE, "overline");
                f12.append("=" + addingResults.result.substring(2), animationStrategy.FADE_IN)

                //pokaz sume jako znak sumy + modul sumy 
                let f13 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f13.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);            
                f13.appendLine("z" + signIndex + "=y" + signIndex + "=" + addingResults.specificInfo.addendSign);
                f13.appendLine("|Z|=");
                f13.append(addingResults.partialResult, animationStrategy.NONE, "overline");
                f13.append("=" + addingResults.result.substring(2))
                f13.appendLine("Zᴹ=z" + signIndex + ".|Z|", animationStrategy.FADE_IN);

                let f14 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f14.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);            
                f14.appendLine("z" + signIndex + "=y" + signIndex + "=" + addingResults.specificInfo.addendSign);
                f14.appendLine("|Z|=");
                f14.append(addingResults.partialResult, animationStrategy.NONE, "overline");
                f14.append("=" + addingResults.result.substring(2))
                f14.appendLine("Zᴹ=z" + signIndex + ".|Z|");
                f14.append("=" + addingResults.result, animationStrategy.FADE_IN);
                xd.push(f8, f9, f10, f11, f12, f13, f14)
            } else {
                //dodaj +1
                let f9 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f9.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);     
                f9.appendLine("\xa0\xa0\xa0\xa0" + "\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", animationStrategy.FADE_IN);

                let f10 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f10.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);     
                f10.appendLine("\xa0\xa0\xa0\xa0");
                f10.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", animationStrategy.NONE, "underline");

                //pokaz modul sumy
                let f11 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f11.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);     
                f11.appendLine("\xa0\xa0\xa0\xa0");
                f11.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", animationStrategy.NONE, "underline");
                f11.appendLine("\xa0\xa0\xa0\xa0" + addingResults.specificInfo.resultAbs, animationStrategy.FADE_IN);

                //pokaz znak sumy 
                let f12 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f12.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);     
                f12.appendLine("\xa0\xa0\xa0\xa0");
                f12.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", animationStrategy.NONE, "underline");
                f12.appendLine("\xa0\xa0\xa0\xa0" + addingResults.specificInfo.resultAbs);
                f12.appendLine("z" + signIndex + "=x" + signIndex, animationStrategy.FADE_IN);

                let f13 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f13.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);     
                f13.appendLine("\xa0\xa0\xa0\xa0");
                f13.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", animationStrategy.NONE, "underline");
                f13.appendLine("\xa0\xa0\xa0\xa0" + addingResults.specificInfo.resultAbs);
                f13.appendLine("z" + signIndex + "=x" + signIndex);
                f13.append("=" + addingResults.specificInfo.resultSign, animationStrategy.FADE_IN);

                //pokaz sume jako znak sumy + modul sumy 
                let f14 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f14.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);     
                f14.appendLine("\xa0\xa0\xa0\xa0");
                f14.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", animationStrategy.NONE, "underline");
                f14.appendLine("\xa0\xa0\xa0\xa0" + addingResults.specificInfo.resultAbs);
                f14.appendLine("z" + signIndex + "=x" + signIndex + "=" + addingResults.specificInfo.resultSign);
                f14.appendLine("Zᴹ=z" + signIndex + ".|Z|", animationStrategy.FADE_IN);
                
                let f15 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
                f15.appendLine("\xa0\xa0" + addingResults.carries.charAt(0) + "←" + addingResults.partialResult);     
                f15.appendLine("\xa0\xa0\xa0\xa0");
                f15.append("\xa0".repeat(addingResults.partialResult.length - 2) + "+1\xa0+", animationStrategy.NONE, "underline");
                f15.appendLine("\xa0\xa0\xa0\xa0" + addingResults.specificInfo.resultAbs);
                f15.appendLine("z" + signIndex + "=x" + signIndex + "=" + addingResults.specificInfo.resultSign);
                f15.appendLine("Zᴹ=z" + signIndex + ".|Z|");
                f15.append("=" + addingResults.result, animationStrategy.FADE_IN);
                xd.push(f8, f9, f10, f11, f12, f13, f14, f15);
            }
        } else {
            let f8 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);

            //pokaż wynik jako moduł sumy
            f8.appendLine("\xa0".repeat("|X|=".length) + addingResults.partialResult);
            f8.append("=|Z|", animationStrategy.FADE_IN);

            //pokaz znak sumy
            let f9 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
            f9.appendLine("\xa0".repeat("|X|=".length) + addingResults.partialResult + "=|Z|");
            f9.appendLine("z" + signIndex + "=x" + signIndex + "=y" + signIndex, animationStrategy.FADE_IN);

            let f10 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
            f10.appendLine("\xa0".repeat("|X|=".length) + addingResults.partialResult + "=|Z|");
            f10.appendLine("z" + signIndex + "=x" + signIndex + "=y" + signIndex);
            f10.append("=" + addingResults.specificInfo.augentSign, animationStrategy.FADE_IN);

            //pokaz sume jako znak sumy + moduł sumy
            let f11 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
            f11.appendLine("\xa0".repeat("|X|=".length) + addingResults.partialResult + "=|Z|");
            f11.appendLine("z" + 
            signIndex + "=x" + 
            signIndex + "=y" + 
            signIndex + "=" + 
            addingResults.specificInfo.augentSign);
            f11.appendLine("Zᴹ=z" + addingResults.specificInfo.augentSign + ".|Z|", animationStrategy.FADE_IN);

            let f12 = this.SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults);
            f12.appendLine("\xa0".repeat("|X|=".length) + addingResults.partialResult + "=|Z|");
            f12.appendLine("z" + 
            signIndex + "=x" + 
            signIndex + "=y" + 
            signIndex + "=" + 
            addingResults.specificInfo.augentSign);
            f12.appendLine("Zᴹ=z" + addingResults.specificInfo.augentSign + ".|Z|");
            f12.append("=" + addingResults.result, animationStrategy.FADE_IN);
            xd.push(f8, f9, f10, f11, f12)
        }
        return new Animation([f1, f2, f3, f4, f5, f6, ...f7, ...xd]);
    }
    private SM_checkPoint1(augentEvenBN, addendEvenBN, addingResults) {
        let f5 = this.showAsEvenBinary(augentEvenBN, addendEvenBN);
        let signIndex = this.toSubscript(addingResults.specificInfo.signIndex);
        f5.appendLine("Xᴹ=" + addingResults.augentRep + "=x" + signIndex + ".|X|,\xa0x" + signIndex + "=" + addingResults.specificInfo.augentSign);
        f5.appendLine("Yᴹ=" + addingResults.addendRep + "=y" + signIndex + ".|Y|,\xa0y" + signIndex + "=" + addingResults.specificInfo.addendSign);
        return f5;
    }
    private SM_checkPoint2(augentEvenBN, addendEvenBN, addingResults) {
        let f6 = this.SM_checkPoint1(augentEvenBN, addendEvenBN, addingResults);
        f6.appendLine("");
        f6.appendLine("|X|=" + addingResults.specificInfo.augentAbs);
        f6.appendLine("|");
        let addendIsC1 = addingResults.specificInfo.augentSign != addingResults.specificInfo.addendSign;
        f6.append("Y", animationStrategy.NONE, addendIsC1 ? "overline" : "");
        f6.append("|=");
        f6.append(addingResults.specificInfo.addendAbs + "\xa0+", animationStrategy.NONE, "underline");
        return f6;
    }

    private SM_newCarries(augentEvenBN, addendEvenBN, addingResults) {
        //let dotIndex = addingResults.carries.indexOf('.');
        let comaIndex = addingResults.carries.indexOf(',');
        let newCarries = comaIndex === -1 ?
        addingResults.carries
        :
        (addingResults.carries.substring(0, comaIndex) + 
        addingResults.carries.charAt(comaIndex + 1) + "\xa0" +
        addingResults.carries.substring(comaIndex + 2));
        if(comaIndex == -1) {
            comaIndex--; //wajcha, potrzebna do paddingu przeniesien, gdy liczby nie maja czesci ulamkowej
        }
        //koiec przeniesienia
        let frames: Frame[] = [];
        let carry = "";
        for(let i = addingResults.partialResult.length - 1, c = i; i > -1; i--, c--) {
            //przenieisenie
            let fi = this.SM_checkPoint1(augentEvenBN, addendEvenBN, addingResults)
            if(addingResults.partialResult.charAt(i) != ',') {
                if (c <= comaIndex + 1) {
                    carry = "\xa0".repeat(c + "|X|=".length - 2) + newCarries.substring(c - 1);              
                } else {
                    carry = "\xa0".repeat(c + "|X|=".length - 1) + newCarries.substring(c);
                }
            } else {
                c++;
            }
            fi.appendLine(carry);
            fi.appendLine("|X|=" + addingResults.specificInfo.augentAbs);
            fi.appendLine("|");
            let addendIsC1 = addingResults.specificInfo.augentSign != addingResults.specificInfo.addendSign;
            fi.append("Y", animationStrategy.NONE, addendIsC1 ? "overline" : "");
            fi.append("|=");
            fi.append(addingResults.specificInfo.addendAbs + "\xa0+", animationStrategy.NONE, "underline");
            fi.appendLine("\xa0\xa0\xa0\xa0");
            fi.append("\xa0".repeat(i));
            fi.append(addingResults.partialResult.charAt(i), animationStrategy.FADE_IN);
            fi.append(addingResults.partialResult.substring(i + 1));
            frames.push(fi);
        }
        return frames;
    }
    private showAsBinary_First(augentBN, addendBN) {
        let f1 = new Frame();
        f1.appendLine("");
        f1.appendLine("X=" + augentBN, animationStrategy.FADE_IN); 
        f1.appendLine("Y=" + addendBN, animationStrategy.FADE_IN); 
        return f1;
    }
    private showAsEvenBinary_First(augentEvenBN, addendEvenBN) {
        let f2 = new Frame();
        f2.appendLine("");
        f2.appendLine("X="); 
        f2.append(augentEvenBN, animationStrategy.FADE_IN);
        f2.appendLine("Y="); 
        f2.append(addendEvenBN, animationStrategy.FADE_IN);
        return f2;
    }
    private showAsEvenBinary(augentEvenBN, addendEvenBN) {
        let f3 = new Frame();
        f3.appendLine("");
        f3.appendLine("X=" + augentEvenBN);
        f3.appendLine("Y=" + addendEvenBN); 
        f3.appendLine("");
        return f3;
    }
    static adding(): Animation {
        let c = "\xa01   ";
        let x = "10100";
        let y = "00110";
        let z = "11010";
        let frames: Frame[] = [];
        let f1 = new Frame();
        f1.appendLine("");
        f1.appendLine(x);
        f1.appendLine("");
        f1.append(y + "\xa0+", animationStrategy.NONE, "underline");
        for(let i = x.length - 1; i > -1; i--) {
            let f = new Frame();
            f.appendLine("");
            if(i - 1 > -1) {
                f.append("\xa0".repeat(i - 1));
                f.append(c.charAt(i - 1), animationStrategy.FADE_IN);
                f.append(c.substring(i), animationStrategy.NONE, "bold");
            }else{
                f.append(c);
            }
            f.appendLine(x.substring(0, i));
            f.append(x.charAt(i), animationStrategy.NONE, "bold");
            f.append(x.substring(i + 1));

            f.appendLine("");
            f.append(y.substring(0, i), animationStrategy.NONE, "underline");
            f.append(y.charAt(i), animationStrategy.NONE, "underline bold");
            f.append(y.substring(i + 1) + "\xa0+", animationStrategy.NONE, "underline");

            f.appendLine("");
            f.append("\xa0".repeat(i));
            f.append(z.charAt(i), animationStrategy.FADE_IN, "bold");
            f.append(z.substring(i + 1));

            frames.push(f);
        }
        let f2 = new Frame();
        f2.appendLine("");
        f2.appendLine(x);
        f2.appendLine("");
        f2.append(y + "\xa0+", animationStrategy.NONE, "underline");
        f2.appendLine("");
        f2.append(z, animationStrategy.NONE, "bold");
        return new Animation([f1, ...frames, f2]);
    }
    static overflow(): Animation {
        let c = "1\xa0\xa0\xa0\xa01   ";
        let x = "\xa011110100";
        let y = "\xa010000110";
        let z = "101111010";
        let frames: Frame[] = [];
        let f1 = new Frame();
        f1.appendLine("");
        f1.appendLine(x);
        f1.appendLine("");
        f1.append(y + "\xa0+", animationStrategy.NONE, "underline");
        for(let i = x.length - 1; i > -1; i--) {
            let f = new Frame();
            f.appendLine("");
            if(i - 1 > -1) {
                f.append("\xa0".repeat(i - 1));
                f.append(c.charAt(i - 1), animationStrategy.FADE_IN);
                f.append(c.charAt(i), animationStrategy.NONE, "bold")
                f.append(c.substring(i + 1), animationStrategy.NONE);
            }else{
                f.append(c.charAt(0), animationStrategy.NONE, "bold");
            }
            f.appendLine(x.substring(0, i));
            f.append(x.charAt(i), animationStrategy.NONE, "bold");
            f.append(x.substring(i + 1));

            f.appendLine("");
            f.append(y.substring(0, i), animationStrategy.NONE, "underline");
            f.append(y.charAt(i), animationStrategy.NONE, "underline bold");
            f.append(y.substring(i + 1) + "\xa0+", animationStrategy.NONE, "underline");

            f.appendLine("");
            f.append("\xa0".repeat(i));
            f.append(z.charAt(i), animationStrategy.FADE_IN, "bold");
            f.append(z.substring(i + 1));

            frames.push(f);
        }
        let f2 = new Frame();
        f2.appendLine("");
        f2.appendLine(x);
        f2.appendLine("");
        f2.append(y + "\xa0+", animationStrategy.NONE, "underline");
        f2.appendLine("");
        f2.append(z, animationStrategy.NONE, "bold");
        return new Animation([f1, ...frames, f2]);
    }
}