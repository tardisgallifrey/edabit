//Add all JavaScript here
const bitwiseAND = (a, b) => {
    return parseInt(a) & parseInt(b);
}

const bitwiseOR = (a, b) => {
    return parseInt(a) | parseInt(b);
}

const bitwiseXOR = (a, b) => {
    return parseInt(a) ^ parseInt(b);
}

const calcbitwise = () => {
    const a = document.getElementById("num_a").value;
    const b = document.getElementById("num_b").value;

    var textline = `The result of bitwise AND is: ${bitwiseAND(a, b)}`;
    document.getElementById("and").innerHTML = textline;

    textline = `The result of bitwise OR is: ${bitwiseOR(a, b)}`;
    document.getElementById("or").innerHTML = textline;

    textline = `The result of bitwise XOR is: ${bitwiseXOR(a, b)}`;
    document.getElementById("xor").innerHTML = textline;
    
}