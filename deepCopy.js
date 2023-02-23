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
function createLearningPaths({
    name = requiredParam('name'),
    courses = [],
}) {
    const private = {
        '_name': name,
        '_courses': courses,

    };
    const public = {

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
        get courses() {
            return private['_courses'];
        },
    }
    return public;
}

function createStudent({
    name = requiredParam('name'),
    email = requiredParam('email'),
    age,
    twitter,
    github,
    approvedCourse = [],
    learningPaths=[],
}={}) {

    const private = {
        "_name": name,
        '_learningPaths': learningPaths,
    }
    const public = {
        email,
        age,
        approvedCourse,
        socialMedia: {
            twitter,
            github,
        },

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
 
        get learningPaths() {
            return private['_learningPaths'];
        },
        set learningPaths(newLearningPaths) {
            if (!newLearningPaths.name) {
                console.warn('the property name of Learning Path can´t be empty');
                return;
            }
            if (!newLearningPaths.courses) {
                console.warn('the Learning Paths don´t have Courses');
                return;
            }

            if (!isArray(newLearningPaths.courses)) {
                console.warn('the learning Paths are not a list (courses )')
                return;
            }
            private['_learningPaths'].push(newLearningPaths);
        },

    }


    return public;
}
const carlos = createStudent({
    name: 'carlos',
    email: 'jaziel@email.com',
});