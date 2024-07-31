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
interface Food{
    name: string,
    price: number,
}

interface SweetFood extends Food{
    tooSweet: boolean;
}

function getFood(sweet: SweetFood){
    sweet.name.toUpperCase();
    sweet.price.toString();
    sweet.tooSweet
}