const pessoa = {
    nome: 'Jotaro', 
    idade: 18,
};


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

//Utilizando o método call
console.log(calculaIdade.call(pessoa, 5));

//Utilizando o método apply
console.log(calculaIdade.apply(pessoa, [8]));