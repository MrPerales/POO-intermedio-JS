const obj1= {
    a:'a',
    b:'b',
    c:{
        d:'d',
        e:'e',
    },
};


///JSON.stringify() allow you to return a text string object with format JSON
const stringifiedComplexObj=JSON.stringify(obj1);
//'{"a":"a","b":"b","c":{"d":"d","e":"e"}}'


//JSON.parse() makes a text string in format JSON return a JavaScript Object 
const obj2= JSON.parse(stringifiedComplexObj);
// Object { a: "a", b: "b", c: {…} }
// a: "a"
// b: "b"
// c: Object { d: "d", e: "e" }

// if we have a function JavaScript inside our object 
// these are not copy because JSON format only help us to save annotations not processes 

