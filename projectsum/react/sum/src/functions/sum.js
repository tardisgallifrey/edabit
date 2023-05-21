
//an exported sum function
export function sum(a, b){
    
    //despite setting things to numbers in
    //state, parseInt is still necessary
    //as a and b are chars instead of ints
    return parseInt(a) + parseInt(b);
}