//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

while (true) {
    const valor = parseFloat(gets());
  
  if (valor > 0) {
    let saldoAtual = 0;
    let saldoFinal = saldoAtual + valor;
    //TODO: Imprimir a mensagem de sucesso, formatando o saldo atual (vide Exemplos).
    print('Deposito realizado com sucesso!');
    print('Saldo atual: R$ ' + saldoFinal.toFixed(2));
    break;
  } else if (valor < 0) {
    //TODO: Imprimir a mensagem de valor inválido.
    print('Valor invalido! Digite um valor maior que zero.');
    break;
  } else {
    //TODO: Imprimir a mensagem de encerrar o programa.
    print('Encerrando o programa...');
    break;
  }
  
  }