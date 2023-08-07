
// // console.log(this);  //window (Its a global object)

// const person = {
//     name : "Adam",
//     print: function(){
//         console.log(this);
//     }
// }
// const person2 = {
//     name : "Julia"
// }

// function x(){
//     console.log(this);
// }
// //The this value is determined or depend om function call
// x()  //window
// x.call(this);  //window    
// x.call(person); //Adam (i.e ob ject of person)
// x.call(person2);  //Julia
// person.print();  //will print objects of person 
// person.print.call();   //This and below are same O/p window
// person.print.call(this);   //window
// person.print.call(person2);   //Julia
// person.print.call(person);  //will print objects of person

//call apply and bind
//They tell the value of this 
//eg call shows person is value of this i.e x.call(person); //Adam







//This works weired in JS expecially with arrow functions 

// const obj = {
//     fn: function () {
//         console.log(this);
//     },
//     fn2: () => {
//         console.log(this);
//     },
// };
// obj.fn();  //obj
// obj.fn2();  //window

// UUUUUUUUUUUUUUU In arrow function ,this refers to its parents this

const obj = {
    firstName: 'Andy',
    printName: () => {
        console.log(this.firstName);//console.log(this);
    },
    printName2: function () {
        console.log(this);
    }
};

const obj2 = {
    firstName: 'Keria'
};

obj.printName();   //undefined when this.firstname
obj.printName();  //window because of arrow function read UUUUUUUUUUUU 
obj.printName2();  //objects

obj.printName.call();  //window
obj.printName2.call();  //window
obj.printName.call(this);  //window
obj.printName2.call(this);  //window



