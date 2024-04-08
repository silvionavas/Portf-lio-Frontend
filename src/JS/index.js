const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoMostrarMenos = document.querySelector('.btn-esconder-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


botaoMostrarProjetos.addEventListener('click', () => {
  mostrarMaisProjetos();
  esconderBotao();
  habilitarMostrarMenos();

});

function esconderBotao() {
  botaoMostrarProjetos.classList.add('remover');
}

function habilitarMostrarMenos() {
  botaoMostrarMenos.classList.add('show');
}

function mostrarMaisProjetos() {
  projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo');
  });
}

botaoMostrarMenos.addEventListener('click', () => {
  mostrarMenosProjetos();
  esconderMostrarMenos();
  habilitarMostrarMais();
});


function habilitarMostrarMais() {
  botaoMostrarProjetos.classList.remove('remover');
}

function esconderMostrarMenos() {
  botaoMostrarMenos.classList.remove('show');
}

function mostrarMenosProjetos() {
  projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.remove('ativo');
  });
}

