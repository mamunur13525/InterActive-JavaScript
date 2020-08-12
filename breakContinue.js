

let array = [2, -3,-4,5,-2,8,-7,9,-1,2,-5,-3,4];

for(let i=0; i<array.length; i++){
    if(array[i] < 0){
        break;
    }
    console.log(array[i]);
}