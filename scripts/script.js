let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;


function selecionarPrato(prato) {
  const selecionado = document.querySelector(".prato .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
    const iconCheck = selecionado.children.item(3).children.item(0);
    iconCheck.classList.remove("selecionado");
  }

  //colocando o ícone de selecionado no produto
  prato.classList.add("selecionado");

  //colocando a classe selecionado no ícone de check para mostrá-lo no produto
  const imgCheck = prato.children.item(3).children.item(0);
  imgCheck.classList.add("selecionado");

  //Pegando o valor do prato e formatando para fazer os cálculos
  valorPrato = prato.children.item(3).innerText;
  valorPrato = Number(valorPrato.replace("R$","").replace(",","."));
  
  //chama a função para verificar se pode ativar o botão de fechar o pedido
  finalizarPedido();
}



function selecionarBebida(bebida) {
  const selecionado = document.querySelector(".bebida .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
    const iconCheck = selecionado.children.item(3).children.item(0);
    iconCheck.classList.remove("selecionado");
  }

  //colocando o ícone de selecionado no produto
  bebida.classList.add("selecionado");

  //colocando a classe selecionado no ícone de check para mostrá-lo no produto
  const imgCheck = bebida.children.item(3).children.item(0);
  imgCheck.classList.add("selecionado");

  valorBebida = bebida.children.item(3).innerText;
  valorBebida = Number(valorBebida.replace("R$","").replace(",","."));

  //chama a função para verificar se pode ativar o botão de fechar o pedido
  finalizarPedido();
}

function selecionarSobremesa(sobremesa) {
  const selecionado = document.querySelector(".sobremesa .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
    const iconCheck = selecionado.children.item(3).children.item(0);
    iconCheck.classList.remove("selecionado");
  }

  //colocando o ícone de selecionado no produto
  sobremesa.classList.add("selecionado");

  //colocando a classe selecionado no ícone de check para mostrá-lo no produto
  const imgCheck = sobremesa.children.item(3).children.item(0);
  imgCheck.classList.add("selecionado");

  valorSobremesa = sobremesa.children.item(3).innerText;
  valorSobremesa = Number(valorSobremesa.replace("R$","").replace(",","."));

  //chama a função para verificar se pode ativar o botão de fechar o pedido
  finalizarPedido();
}



function finalizarPedido() {
  const pratoSelecionado = document.querySelector(".prato .selecionado");
  const bebidaSelecionada = document.querySelector(".bebida .selecionado");
  const sobremesaSelecionada = document.querySelector(".sobremesa .selecionado");

  if (pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
    const botao = document.querySelector(".pedir").children.item(0);
    botao.disabled = false;
    botao.textContent = "Finalizar Pedido"
  }
}