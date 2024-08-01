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

// example - 2
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


// example - 3 (extends)
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

// example 2

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


// example3
type Data = string | null;

class PenDrive{
    company = "hp";
    price = 1200;
    data: string | null = null;

    putData(newData: Data){
        console.log(`putting data ${newData}`);
        this.data = newData;
    }
    
    getData(){
        console.log(this.data);
    }
}

let penDrive1 = new PenDrive();
penDrive1.putData("20")
penDrive1.getData()