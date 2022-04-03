let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let total = 0;

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
  valorPrato = valorPrato.toFixed(2);
 
  //chama a função que checa se pode habilitar o botão
  habilitaBotao();
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
  valorBebida = valorBebida.toFixed(2);

  //chama a função que checa se pode habilitar o botão
  habilitaBotao();
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
  valorSobremesa = valorSobremesa.toFixed(2);

  //chama a função que checa se pode habilitar o botão
  habilitaBotao();
}

function habilitaBotao() {
  const pratoSelecionado = document.querySelector(".prato .selecionado");
  const bebidaSelecionada = document.querySelector(".bebida .selecionado");
  const sobremesaSelecionada = document.querySelector(".sobremesa .selecionado");

  if (pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
    const botao = document.querySelector(".pedir").children.item(0);
    botao.disabled = false;
    botao.textContent = "Finalizar Pedido";
  }
}

function finalizarPedido() {
  const pratoSelecionado = document.querySelector(".prato .selecionado");
  const bebidaSelecionada = document.querySelector(".bebida .selecionado");
  const sobremesaSelecionada = document.querySelector(".sobremesa .selecionado");

  //Calcula o valor final do pedido
  //com apenas 2 dígitos decimais
  total = (Number(valorPrato) + Number(valorBebida) + Number(valorSobremesa)).toFixed(2);
  let totalTxt = total.toString().replace('.',","); //troca novamente o "ponto" por "vírgula"

  //Pegando o nome dos itens pedidos
  const pratoPedido = pratoSelecionado.children.item(1).textContent;
  const bebidaPedida = bebidaSelecionada.children.item(1).textContent;
  const sobremesaPedida = sobremesaSelecionada.children.item(1).textContent;

  //Texto do pedido que será enviado via whatsapp
  const uri = `Olá, gostaria de fazer o pedido:\n
  - Prato: ${pratoPedido}\n
  - Bebida: ${bebidaPedida}\n
  - Sobremesa: ${sobremesaPedida}\n\n
  Total: R$ ${totalTxt} `

  //URI encodada para funcionar no navegador
  const uriEncoded = encodeURIComponent(uri);
  window.open(`https://wa.me/5586988660071?text=${uriEncoded}`,'_blank');
}
