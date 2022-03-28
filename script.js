function destacar (eventoOrigem) {
  eventoOrigem.target.style.backgroundColor = 'gray';
  console.log(eventoOrigem.target);
}

const listaOrd = document.getElementById('lista-tarefas');
function novaTarefa() {
  const li = document.createElement('li');
  let tarefaNova = document.getElementById('texto-tarefa').value;
  li.innerHTML = tarefaNova;
  li.addEventListener('click', destacar)
  listaOrd.appendChild(li);
  document.getElementById('texto-tarefa').value = '';
}

const btnCriar = document.getElementById('criar-tarefa');
btnCriar.addEventListener('click', novaTarefa);