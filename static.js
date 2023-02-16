//Static: attributes and static methods JavaScript 

const objetito ={
    name:'Carlos',
    email:'carlosperales050@gmail.com',
    age:27,
}
//return a list with all the keys  of our object (objetito)
Object.keys(objetito); 
//['name','email', 'age']

//return the same (object.keys) but with a little differences
Object.getOwnPropertyNames(objetito); //['name','email', 'age']

//return array of arrays where we have our keys and value [key,value]
Object.entries(objetito);
/*[
    0: Array [ "name", "Carlos" ]
​
    1: Array [ "email", "carlosperales050@gmail.com" ]
​
    2: Array [ "age", 27 ]
]*/

//return all object properties with their keys and values  
//writable ,configurable , enumerable 
Object.getOwnPropertyDescriptors(objetito);
/*
age: Object { value: 27, writable: true, enumerable: true, … }
​​
configurable: true
​​
enumerable: true
​​
value: 27
​​
writable: true
​....
*/
