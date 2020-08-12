

function name(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const result = name();
console.log(result());
console.log(result());
console.log(result());
console.log(result());

const total = name();
console.log(total());
console.log(total());
console.log(result());