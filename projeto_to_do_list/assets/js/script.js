var botao = document.getElementById('adicionar');
var itens = document.getElementById('itens');

var lista = [];

function adicionarItens()
{
    var texto = document.getElementById('taskField').value;
    
    if(texto != '')
    {
        itens.innerHTML = null;
        lista.push(texto);
        lista.forEach((text) => {
            var item = document.createElement('input');
            var label = document.createElement('label');
            var br = document.createElement('br');
            item.type = 'checkbox';
            item.id = text;
            label.className = "check";
            label.innerHTML = text;
            itens.appendChild(item);
            itens.appendChild(label);
            itens.appendChild(br);
        });
    }
        
   

    console.log(lista);
}