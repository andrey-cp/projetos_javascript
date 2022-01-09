let array = [30, 30, 40, 5, 223, 2049, 3034, 5];

const mySet = new Set();

function valoresUnicos(arr)
{
    let newArray = [];
    array.forEach(element => {mySet.add(element);})

    return [...mySet];
}


console.log(valoresUnicos(array));
