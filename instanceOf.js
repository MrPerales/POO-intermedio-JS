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

function requiredParam(param) {
    throw new Error(param + 'missing parameter');

}
function LearningPaths({
    name = requiredParam('name'),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;

}

function Student({
    name = requiredParam('name'),
    email = requiredParam('email'),
    age,
    twitter,
    github,
    approvedCourse = [],
    learningPaths = [],
}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourse = approvedCourse;
    this.learningPaths = learningPaths;
    this.socialMedia = {
        twitter,
        github,
    }
    //we validate if learningPaths is an ARRAY
    if (isArray(learningPaths)) {

        this.learningPaths = [];    // so we can used the method .push()

        //with FOR IN we check if each element is an instance of Learning Paths
        for (learningPathIndex in learningPaths) {

            console.log(learningPaths[learningPathIndex]);

            console.log(learningPaths[learningPathIndex] instanceof LearningPaths)

            if (learningPaths[learningPathIndex] instanceof LearningPaths) {
                this.learningPaths.push(learningPaths[learningPathIndex]);

            }// else {

            //     console.warn('this learningPath is not instance of LEarningPaths');
            //     return;
            // }

        }
    } else {
        console.warn('learningPath is not array');
        return;
    }




}
const schoolWeb = new LearningPaths({ name: 'School WebDev' });
const schoolData = new LearningPaths({ name: 'School Data Science' })
const carlos = new Student({
    name: 'carlos',
    email: 'jaziel@email.com',
    learningPaths: [
        schoolData,
        schoolWeb,
        {
            name: 'Impostor School',
            courses: [],
        },
        {
            name: 'impostor2 School',
            courses: [],
        },
    ]

});