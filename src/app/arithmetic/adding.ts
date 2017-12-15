import { RepresentationConverter } from "./representation-converter";
import { Utils } from "./utils";

export interface AddingResult {
  augentRep: string;
  addendRep: string;
  partialResult: string;
  result: string;
  carries: string;
  overflowDetected: boolean;
  specificInfo: any;
}

export class Adding {
  representationConverter: RepresentationConverter = new RepresentationConverter();

  addInSM(augent: string, addend: string): AddingResult {
    //to jest SM
    //jako input wchodzi binarnie
    //inputy sa tej samej dlugosci
    let augentSM = this.representationConverter.toSignModule(augent);
    let addendSM = this.representationConverter.toSignModule(addend);
    let augentSplit = Utils.splitNumber(augentSM);
    let addendSplit = Utils.splitNumber(addendSM);
    let augentSign = augentSplit.sign;
    let augentAbs = augentSplit.fractional ? augentSplit.integer + ',' + augentSplit.fractional : augentSplit.integer;
    let addendSign = addendSplit.sign;
    let addendAbs = addendSplit.fractional ? addendSplit.integer + ',' + addendSplit.fractional : addendSplit.integer;
    let partialResult;
    if (augentSign != addendSign) {
      addendAbs = Utils.invertOneAndZeros(addendAbs);
    }
    let resultAbs = '';
    let resultSign = augentSign //if is different from auddend sign, it will be overriden later;
    let carries = '';
    let carry = '0';
    for (let i = augentAbs.length - 1; i > -1; i--) {
      if (augentAbs.charAt(i) == '.' || augentAbs.charAt(i) == ',') {
        resultAbs += augentAbs.charAt(i);
        carries += augentAbs.charAt(i);
      } else {
        let addingDigits = Utils.addDigits(augentAbs.charAt(i), addendAbs.charAt(i), carry);
        resultAbs += addingDigits.result;
        carry = addingDigits.carry;
        carries += carry
      }
    }
    resultAbs = resultAbs.split("").reverse().join("");
    partialResult = resultAbs;
    if (augentSign != addendSign) {
      if (carry) {
        resultAbs = Utils.addOne(resultAbs);
        resultSign = augentSign;
      } else {
        resultAbs = Utils.invertOneAndZeros(resultAbs);
        resultSign = addendSign;
      }
    }

    let addingInfo = {
      augentRep: augentSM,
      addendRep: addendSM,
      partialResult: partialResult,
      result: resultSign + '.' + resultAbs,
      carries: carries.split("").reverse().join(""),
      //TODO extract to detect overflow method
      overflowDetected: (augentSM.charAt(0) === addendSM.charAt(0) && resultSign !== augentSM.charAt(0)),
      specificInfo: {
        augentSign: augentSign,
        augentAbs: augentAbs,
        addendSign: addendSign,
        addendAbs: addendAbs,
        resultSign: resultSign,
        resultAbs: resultAbs,
        signIndex: augentSM.indexOf(',') == -1 ? (augentSM.length - 2).toString() : (augentSM.indexOf(',') - 2).toString()
      }
    };
    return addingInfo;
  }

  addInU1(augent: string, addend: string): AddingResult {
    //to jest U1
    //jako input wchodzi binarnie
    //inputy sa tej samej dlugosci
    let augentU1 = this.representationConverter.toU1(augent);
    let addendU1 = this.representationConverter.toU1(addend);
    let result = '';
    let partialResult = '';
    let carries = '';
    let carry = '0';
    for (let i = augentU1.length - 1; i > -1; i--) {
      if (augentU1.charAt(i) == '.' || augentU1.charAt(i) == ',') {
        partialResult += augentU1.charAt(i);
        carries += augentU1.charAt(i);
      } else {
        let addingDigits = Utils.addDigits(augentU1.charAt(i), addendU1.charAt(i), carry);
        partialResult += addingDigits.result;
        carry = addingDigits.carry;
        carries += carry
      }
    }
    partialResult = partialResult.split("").reverse().join("");
    if (carry) {
      result = Utils.addOne(partialResult);
    } else {
      result = partialResult;
    }

    let addingInfo = {
      augentRep: augentU1,
      addendRep: addendU1,
      partialResult: partialResult,
      result: result,
      carries: carries.split("").reverse().join(""),
      //TODO extract to detect overflow method
      overflowDetected: (augentU1.charAt(0) === addendU1.charAt(0) && result.charAt(0) !== augentU1.charAt(0)),
      specificInfo: null
    };
    return addingInfo;
  }
  
  addInU2(augent: string, addend: string): AddingResult {
    //to jest U2
    //ale jako input wchodzi binarnie
    //inputy sa tej samej dlugosci
    let augentU2 = this.representationConverter.toU2(augent);
    let addendU2 = this.representationConverter.toU2(addend);
    let result = '';
    let carry = '0';
    let carries = '';
    for (let i = augentU2.length - 1; i > -1; i--) {
      if (augentU2.charAt(i) == '.' || augentU2.charAt(i) == ',') {
        result += augentU2.charAt(i);
        carries += augentU2.charAt(i);
      } else {
        let addingDigits = Utils.addDigits(augentU2.charAt(i), addendU2.charAt(i), carry);
        result += addingDigits.result;
        carry = addingDigits.carry;
        carries += carry;
      }
    }
    carries += carry;

    let addingInfo = {
      augentRep: augentU2,
      addendRep: addendU2,
      partialResult: '',
      result: result.split("").reverse().join(""),
      carries: carries.split("").reverse().join(""),
      //TODO extract to detect overflow method
      overflowDetected: (augentU2.charAt(0) === addendU2.charAt(0) && result.charAt(0) !== augentU2.charAt(0)),
      specificInfo: null
    };
    return addingInfo;
  }
}