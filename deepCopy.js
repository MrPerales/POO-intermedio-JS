// const obj1= {
//     a:'a',
//     b:'b',
//     c:{
//         d:'d',
//         e:'e',
//     },
// };

function isObject(subject) {
    return typeof subject == "object"
}

function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {

    let copySubject;  //Copy Array 

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
    //|
    //|         /*initializing variables like array or object */
    //v         /*depending the case  */    
    if (subjectIsArray) {

        copySubject = [];
    } else if (subjectIsObject) {

        copySubject = {};
    } else {

        return subject;
    }
    ////////////////////////////////////
    for (key in subject) {

        //|     
        //v                /*Analyzing type of the key */
        const keyIsObject = isObject(subject[key]);
        ////////////////////////////////////////////

        if (keyIsObject) {
            //recursion
            //|             
            //v 
            copySubject[key] = deepCopy(subject[key]);
            /////////////////////////////////////////////////
        }
        else {
            if (subjectIsArray) {

                copySubject.push(subject[key]);
            } else {

                copySubject[key] = subject[key];
            }

        }

    }
    return copySubject;
}

//abstraction with Objects  and deepCopy

// const studentBase={
//     name:undefined,
//     email:undefined,
//     age:undefined,
//     approvedCourse:undefined,
//     learningPaths:undefined,
//     socialMedia:{
//         twitter:undefined,
//         facebook:undefined,
//         gitHub:undefined,
//     }
// }

// const carlos=deepCopy(studentBase); 


function requiredParam(param) {
    throw new Error(param + 'missing parameter');

}

function createStudent({
    name = requiredParam('name'),
    age,
    email = requiredParam('email'),
    twitter,
    github,
    approvedCourse = [],
    learningPaths = [],
}) { 

    const private = {
        "_name": name,
    }
    const public = {
        age,
        email,
        socialMedia: {
            twitter,
            github,
        },
        approvedCourse,
        learningPaths,

        ///////Getters and Setters 
        get name() {
            return private['_name'];
        },
        set name(newName) {
            if (newName.length != 0) {
                private['_name'] = newName;
            } else {
                console.warn('name can´t be empty ');
            }
        },
        /////////////////////////
        // readName(){
        //     //it's the same
        //     //     private['_name];
        //     return private["_name"];
        // },
        // changeName(newName) {
        //     //it's the same
        //     //private._name=newName;
        //    private["_name"] = newName;

        // },

    }
    //blocking methods
    //|
    //v
    //                    Object , Object property ,configuration 
    // Object.defineProperty(public,'readName',{
    //     writable:false,
    //     configurable:false,
    // });

    // Object.defineProperty(public,'changeName',{
    //     writable:false,
    //     configurable:false,
    // });
    /////////////////////////

    return public;
}
const carlos2 = createStudent({
    name: 'carlos2',
    age: 27,
    email: 'jaziel@email.com',
    twitter: 'twitter'
});