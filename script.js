function completo(eventoOrigem) {
  if (eventoOrigem.target.classList[0] === 'completed') {
    eventoOrigem.target.classList.remove('completed');
  } else {
    eventoOrigem.target.classList.add('completed');
  }
}

let tamanhoLista = 0;
function destacar(eventoOrigem) {
  for (let x = 0; x < tamanhoLista; x += 1) {
    let ta
    listaOrd.children[x].style.backgroundColor = 'white';
  }
  eventoOrigem.target.style.backgroundColor = 'gray';
}

const listaOrd = document.getElementById('lista-tarefas');
function novaTarefa() {
  const li = document.createElement('li');
  const tarefaNova = document.getElementById('texto-tarefa').value;
  li.innerHTML = tarefaNova;
  li.addEventListener('click', destacar);
  li.addEventListener('dblclick', completo);
  listaOrd.appendChild(li);
  document.getElementById('texto-tarefa').value = '';
  tamanhoLista = listaOrd.children.length;
  return (tamanhoLista);
}

const btnCriar = document.getElementById('criar-tarefa');
btnCriar.addEventListener('click', novaTarefa);
let tamanho = tamanhoLista.lenght;
