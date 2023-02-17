const carlos={
    name:'Carlos',
    age:27,
    approvedCourses:['Course 1'],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}
// console.log('keys');
// console.log( Object.keys(carlos));

// console.log( 'getOwnPropertyNames ')
// console.log( Object.getOwnPropertyNames(carlos));

// console.log('entries');
// console.log( Object.entries(carlos));

console.log('getOwnPropertyDescriptors'); 

//defineProperty need 3 arguments  (nameObject, newAttribute, list value)


Object.defineProperty(carlos,'navegador',{
    value:'chrome',
    enumerable:false,  //don´t show property
    writable:true,
    configurable:true,
})
Object.defineProperty(carlos,'editor',{
    value:'VSCode',
    enumerable:true,
    writable:false,     //don´t allow editing
    configurable:true,
})
Object.defineProperty(carlos,'Terminal',{
    value:'GitBash',
    enumerable:true,
    writable:true,
    configurable:false, //don´t allow us to remove the property 
})
Object.defineProperty(carlos,'pruebaNASA',{
    value:'ovni',
    enumerable:false,
    writable:false,
    configurable:false,
})

//
Object.seal(carlos); //configurable:false;

Object.freeze(carlos);//configurable:false and writeable :false

console.log(Object.getOwnPropertyDescriptors(carlos));
