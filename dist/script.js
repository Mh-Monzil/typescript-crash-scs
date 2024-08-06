"use strict";
// union ------------------------------
// let a: number | string;
// a = 12;
// a = "hey";
// intersection ------------------------
// type Name = {
//     name: string;
// }
// type Roll = {
//     roll: number;
//     section: string;
// }
// type NameInRoll = Name & Roll;
// let value:NameInRoll = {
//     name: "monzil",
//     roll: 12,
//     section: "B"
// }
//primitive type aliases ---------------
// let a: number;
// let b: string;
// type Name = string;
// let userName: Name;
// type Age = number | string;
// let ageOfUser: Age = "ten";
//object type aliases ------------------
// type Human = {
//     name: string;
//     age: number;
//     email: string;
// }
// let monzil: Human = {
//     name: "monzil",
//     age: 12,
//     email: "monzil@gmail.com"
// }
// let ozil: Human = {
//     name: "ozil",
//     age: 20,
//     email: "ozil@gmail.com"
// }
// interfaces ----------------------
// example - 1
// interface User{
//     name: string,
//     username: string,
//     age: number,
//     email: string,
//     password: string,
// }
// function getUser(user: User){
//     user.name.toUpperCase();
// }
// example - 2--------------------------------
// interface Human{
//     name: string,
// }
// interface Human{
//     age: number,
// }
// function humanInfo(human: Human){
//     human.name.toUpperCase();
//     human.age.toFixed();
// }
// example - 3 (extends)-----------------
// interface Food{
//     name: string,
//     price: number,
// }
// interface SweetFood extends Food{
//     tooSweet: boolean;
// }
// function getFood(sweet: SweetFood){
//     sweet.name.toUpperCase();
//     sweet.price.toString();
//     sweet.tooSweet;
// }
// class  ----------------------------------------
// example1
// class Phone{
//     price = 2500;
//     image = "images/phone";
//     color = "black";
//     playMusic(){
//         console.log("music playing");
//     }
//     switchMode(mode: string){
//         console.log(mode);
//     }
// }
// example 2 -----------------------
// class AirConditioner {
//     color = "white";
//     category = "AC";
//     company = "singer";
//     temperature = 24;
//     turnOn(name: string){
//         console.log(`turning on... ${name}`);
//     }
//     turnOf(name: string){
//         console.log(`turning of... ${name}`);
//     }
//     raiseTemperature(){
//         this.temperature++;
//         console.log("temperature raised by 1", this.temperature);
//     }
//     decreaseTemperature(){
//         this.temperature--;
//         console.log("temperature decreased by 1", this.temperature);
//     }
// }
// let ac1 = new AirConditioner();
// let ac2 = new AirConditioner();
// ac1.turnOn("ac1")
// ac1.raiseTemperature();
// ac2.turnOf("ac2") 
// example3-------------------------
// type Data = string | null;
// class PenDrive{
//     company = "hp";
//     price = 1200;
//     data: string | null = null;
//     putData(newData: Data){
//         console.log(`putting data ${newData}`);
//         this.data = newData;
//     }
//     getData(){
//         console.log(this.data);
//     }
// }
// let penDrive1 = new PenDrive();
// penDrive1.putData("20")
// penDrive1.getData()
// example4---------------
// class Food{
//     price = 1200;
//     eat(){
//         console.log("eating");
//     }
// }
// class Sweet extends Food {
//     name = "Sweet";
// }
// let sweet1 = new Sweet();
// sweet1.eat
// constructor ---------------------------------
// class Earphones {
//     // company : string;
//     // price : number;
//     // constructor(name: string, price: number) {
//     //     this.company = name;
//     //     this.price = price;
//     // }
//     constructor(public name: string, public price: number) {
//         this.name = name;
//         this.price = price;
//     }
// }
// let e1 = new Earphones("Samsung", 2500);
// let e2 = new Earphones("Apple", 3600);
// access modifiers----------------------------------------
// 1. public can use inside of the class and also can use outside of the class through instance
// 2. Private can only use inside of the class
// 3. Protected can use inside of the class and also can use the extended class but cannot use outside of the class like private with instance
// class PenDrive {
//     private price = 12; 
//     constructor(){
//         this.price = 1200;
//         console.log(this.price);
//     }
// }
// let p1 = new PenDrive(); // instance
// read only properties ------------------------------
// class Shop{
//     constructor(public readonly discount: number) {
//         this.discount = discount;
//     }
//     getDiscount(){
//         console.log(this.discount);
//     }
// }
// Getters and Setters ----------------------
class Abcd {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    set Names(value) {
        this.name = value;
    }
}
// if we use getter and setter this will act like an object. And we can access value from it like and object;
let abcd1 = new Abcd("monzil");
console.log(abcd1.Name);
abcd1.Names = "mh";
console.log(abcd1.Name);
