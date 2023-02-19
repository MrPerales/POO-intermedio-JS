const obj1= {
    a:'a',
    b:'b',
    c:{
        d:'d',
        e:'e',
    },
};

function isObject(subject){
    return typeof subject == "object"
}

function isArray(subject){
    return Array.isArray(subject);
}

function deepCopy(subject){
    
    let copySubject;  //Copy Array 

    const subjectIsObject=isObject(subject);
    const subjectIsArray=isArray(subject);
    //|
    //|         /*initializing variables like array or object */
    //v         /*depending the case  */    
    if(subjectIsArray){

        copySubject=[];    
    }else if(subjectIsObject){
    
        copySubject={};
    }else{
    
        return subject;
    }
    ////////////////////////////////////
    for(key in subject){

        //|     
        //v                /*Analyzing type of the key */
        const keyIsObject= isObject(subject[key]);
        ////////////////////////////////////////////

        if(keyIsObject){
            //recursion
            //|             
            //v 
            copySubject[key]= deepCopy(subject[key]);
            /////////////////////////////////////////////////
        }
        else{
            if(subjectIsArray){

                copySubject.push(subject[key]);
            }else{
            
                copySubject[key]=subject[key];
            }

        }

    }
    return copySubject;
}