var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var botaoAdd = document.getElementById('adicionar');
var botaoDec = document.getElementById('subtrair');

function increment()
{
    if(currentNumber < 10)
    {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerText = currentNumber;
    }

    if(currentNumber >= 0)
    {
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement()
{
    if(currentNumber > -10)
    {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerText = currentNumber;     
    }

    if(currentNumber < 0)
{
    currentNumberWrapper.style.color = 'red';
}
}

botaoAdd.addEventListener('click', increment);

botaoDec.addEventListener('click', decrement);
