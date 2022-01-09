class ContaBancaria {
    constructor(agencia = 1, numero = 123, tipo = 'conta bancária', _saldo = 0){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = _saldo;
    }

    get saldo()
    {
        return this._saldo;
    }

    set saldo(valor)
    {
        this._saldo = valor;
    }

    sacar(qtd)
    {
        try {
            if(typeof(qtd) !== 'number')
            {
                throw new TypeError('Esse valor de saque não é válido.');
            }
            else if(this._saldo - qtd < 0)
            {
                throw new RangeError('Você não possui esse valor na conta para sacar.');
            }
            else
            {
                this._saldo -= qtd;
                console.log(`Você sacou ${qtd} reais. Seu saldo agora é de ${this._saldo}`);
            }
        }
        catch(e)
        {
            console.log(e.message);
        }
    }

    depositar(qtd)
    {
        try {
            if(typeof(qtd) === 'number')
            {
                this._saldo += qtd;
                console.log(`Você depositou ${qtd} reais, seu saldo agora é de ${this._saldo} reais.`);
            }
            else
            {
                throw new TypeError('Valor do saldo inválido');
            }
        }
        catch(e)
        {
            console.log(e.message);
        }
    }
}

class ContaCorrente extends ContaBancaria
{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'conta corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito()
    {
        return this._cartaoCredito;
    }
    
    set cartaoCredito(valor)
    {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria
{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta poupança';
    }
}

class ContaUniversitaria extends ContaBancaria
{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta universitária';
    }

    sacar(qtd)
    {
        try
        {
            if(qtd > 500)
            {
                throw new RangeError('Operação negada! O valor desejado ultrapassa o limite de 500 reais.');
            }

            else
            {
                this._saldo -= qtd;
                console.log(`Você sacou ${qtd} reais, seu saldo agora é de ${this._saldo}`);
            }
        }
        catch(e)
        {
            console.log(e.message)
        }
        
        
    }
}

const contaUni = new ContaUniversitaria();
contaUni.depositar(1000);
contaUni.sacar(345);
console.log(contaUni.saldo);