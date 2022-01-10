const listaPrecos = [20, 5, 10, 50, 300, 40, 200];

function calculaSaldoFinal(lista, saldo)
{
    let somatorio = lista.reduce(function(accumulator, currentValue){return accumulator += currentValue});

    try {
        if(somatorio > saldo)
        {
            throw new Error('Saldo indisponível para realizar essa compra.');
        }
        else
        {
            return saldo -= somatorio;
        }
    }
    catch(e){
        console.log(e.message);
    }
}

var resultado = calculaSaldoFinal(listaPrecos, 1000);
if(resultado !== undefined)
{
    console.log(`O saldo restante é ${resultado} reais.`);
}
