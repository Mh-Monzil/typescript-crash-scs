"use strict";
// union ------------------------------
// let a: number | string;
// a = 12;
// a = "hey";
class PenDrive {
    constructor() {
        this.company = "hp";
        this.price = 1200;
        this.data = null;
    }
    putData(newData) {
        console.log(`putting data ${newData}`);
        this.data = newData;
    }
    getData() {
        console.log(this.data);
    }
}
let penDrive1 = new PenDrive();
penDrive1.putData("20");
penDrive1.getData();
