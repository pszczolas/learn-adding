export class Utils {
    static invertOneAndZeros(num: string) {
        let result = '';
        for(let i = 0; i < num.length; i++) {
          if(num.charAt(i) == '0') {
            result += 1;
          } else if (num.charAt(i) == '1'){
            result += 0;
          } else if (num.charAt(i) == '.'){
            result += '.'
          } else if (num.charAt(i) == ','){
            result += ','
          }
        }
        return result;
    }
    static addDigits(first: string, second: string, carry: string = '0') : {result, carry} {
        const tmp = first + second + carry;
        const stringsearch = '1';
        switch(tmp.split(stringsearch).length - 1) {
          case 0:
            return {result: 0, carry: 0}
          case 1:
            return {result: 1, carry: 0}
          case 2:
            return {result: 0, carry: 1}
          case 3:
            return {result: 1, carry: 1}
        }
    }
    static addOne(num: string): string{
        let result = '';
        let pad = ' '.repeat(num.length);
        pad = (pad + '1').slice(-pad.length);
        let carry = '0';
        let addend = '1'
        for(let i = num.length - 1; i > -1; i--) {
          if(num.charAt(i) == '.' || num.charAt(i) == ',') {
            result += num.charAt(i);
          }else{
            let addingDigits = this.addDigits(num.charAt(i), addend, carry)
            result += addingDigits.result;
            carry = addingDigits.carry;
            addend = '0';
          }
        }
        result = result.split("").reverse().join("");
        return result;
    }
    static evenBinaryNumbers2(num1: string, num2: string) {
        let num1s = this.splitBinaryNumber(num1);
        let num2s = this.splitBinaryNumber(num2);
        
        //integer
        let finalIntegerLength = Math.max(num1s.integer.length, num2s.integer.length);
        let integerPad = '0'.repeat(finalIntegerLength);
        num1s.integer = integerPad.substring(0, integerPad.length - num1s.integer.length) + num1s.integer;
        num2s.integer = integerPad.substring(0, integerPad.length - num2s.integer.length) + num2s.integer;
        //fractional
        let finalFractionalLength = Math.max(num1s.fractional.length, num2s.fractional.length);
        let fractionalPad = '0'.repeat(finalFractionalLength);
        num1s.fractional = num1s.fractional + fractionalPad.substring(0, fractionalPad.length - num1s.fractional.length);
        num2s.fractional = num2s.fractional + fractionalPad.substring(0, fractionalPad.length - num2s.fractional.length);
        let fractionalSeparator = (num1s.fractional.length === 0 && num2s.fractional.length === 0) ? "" : ",";
        //return
        return [num1s.sign + num1s.integer + fractionalSeparator + num1s.fractional,
                num2s.sign + num2s.integer + fractionalSeparator + num2s.fractional]
    }
    static splitNumber(num: string): {sign, integer, fractional} {
        // for SM U2 and U2, not for natural binary
        let splited: {sign, integer, fractional} = {sign: 'x', integer: 'x', fractional: 'x'};
        //splited.sign = num.charAt(0);
        [splited.sign, splited.integer, splited.fractional] = num.replace(',','.').split('.');
        return splited;
    }
    static splitBinaryNumber(num: string): {sign, integer, fractional} {
        let splited: {sign, integer, fractional} = {sign: '', integer: 'x', fractional: 'x'};
        if(num.charAt(0) === '-') {
          splited.sign = '-';
          num = num.substring(1);
        }else{
          splited.sign = '\xa0'
        }
        [splited.integer, splited.fractional] = num.replace(',','.').split('.');
        if(!splited.fractional) {
          splited.fractional = '';
        }
        return splited;
    }
}