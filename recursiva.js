// ///recursion 

// function recursion(){
//     if(/**validation*/){
//         //recursive calls 
//     }else {
//         //normal calls without recursive  
//     }
// }

const numberArray =[1,2,3,4,5,84,86,4,8,65,84,651,5];

// let number=0;

// for(let i =0 ;i < numberArray.length;i++){
//     number= numberArray[i];
//     console.log({i, number});
    
// }

function recursion(numberArray){
    if(numberArray!=0){
        
       const number=numberArray[0];
        
        console.log(number);
        
        numberArray.shift(); //delate first array element 

        recursion(numberArray);
    }
}
// recursion([1,2,3,4,5,84,86,4,8,65,84,651,5])