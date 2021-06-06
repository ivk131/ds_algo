const numbers = 12345;

const reverseNumber= (numbers)=>{
    let str = numbers + '';

    return str.split('').reverse().join('');
}

console.log(reverseNumber(numbers));