// Dado un objeto como el siguiente:

const carlos = {
  name: "Carlos",
  approvedCourses: ["Course 1", "Course 2"],
  characteristic: {
    age: 18,
    colorHair: 'Negro',
    hobbies: {
      music: ['rock', 'punk', 'ska'],
      movies: ['drama', 'horror', 'comedy'],
    },
  },
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};
//   Tu reto es crear una función que aplique Object.freeze 
//   a TODOS LOS OBJETOS anidados de forma recursiva para 
//   así realmente lograr bloquear todo el objeto. A esto se 
//   le conoce comunmente como deepFreeze.



function deepFreeze(obj) {

  if (typeof obj === 'object') {
    
    Object.freeze(obj);
    
    for (key in obj) {
      
   
      deepFreeze(obj[key]);

    }

  } else {
    return obj;
  }

}
deepFreeze(carlos);

console.log(Object.isFrozen(carlos));