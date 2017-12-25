import { Injectable } from '@angular/core';

@Injectable()
export class BlockDiagramService {

  constructor() { }
  get(representation: string) {
    switch(representation) {
      case "SM": return this.SM();
      case "U1": return this.U1();
      case "U2": return this.U2();
    }
  }
  SM(): string{
    return "https://raw.githubusercontent.com/pszczolas/adding-in-binary/master/src/assets/SM_642_sa.png";
  }
  U1(): string {
    return "https://raw.githubusercontent.com/pszczolas/adding-in-binary/master/src/assets/U1_642_2.png";
  }
  U2(): string {
    return "https://raw.githubusercontent.com/pszczolas/adding-in-binary/master/src/assets/U2_642_2_sa.png";
  }
}
