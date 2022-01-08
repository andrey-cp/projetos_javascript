let aluno1 = {nome: 'Jotaro', nota: 10};
let aluno2 = {nome: 'Dio', nota: 8};
let aluno3 = {nome: 'Polnareff', nota: 4};
let aluno4 = {nome: 'Avdol', nota: 6};
let aluno5 = {nome: 'Kakyoin', nota: 7}
let aluno6 = {nome: 'Giorno', nota: 9}

let arrayAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6];
let arrayAprovados = [];
const mediaFinal = 7;


function aprovados(arrayElements)
{
    arrayElements.forEach(element => {
        /*
       if(element.nota >= mediaFinal)
       {
           arrayAprovados.push(element);
       }
       */
        (function getNotas({nota: notaAluno})
        {
            if(notaAluno >= mediaFinal)
            {
                arrayAprovados.push(element);
            }
        })(element);
        
    });

    console.log(arrayAprovados);
}

aprovados(arrayAlunos);


