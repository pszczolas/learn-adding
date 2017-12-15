import { Utils } from "./utils";

export enum BinaryNumberRepresentation {
    SM,
    U1,
    U2
}
export class RepresentationConverter {
    toSignModule(num: string) : string {
        num = num.replace('.',',');
        if(num.charAt(0) != '-') {
          return '0.' + num;
        }
        return '1.' + num.substring(1);
      }
      toU1(num: string) : string {
        if(num.charAt(0) != '-') {
          return '0.' + num;
        }
        return '1.' + Utils.invertOneAndZeros(num);
      }
      toU2(num: string) : string {
        if(num.charAt(0) != '-') {
          return '0.' + num;
        }
        let inU1 = this.toU1(num);
        return Utils.addOne(inU1);
      }
}