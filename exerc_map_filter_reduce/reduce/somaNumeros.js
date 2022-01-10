const numArray = [1, 2, 3, 4, 5];

var soma = numArray.reduce(function callBack(accumulator, currentValue)
{
    return accumulator += currentValue;
})

console.log(soma);