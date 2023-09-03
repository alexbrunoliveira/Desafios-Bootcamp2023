//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

function saque(saldoFinal, valorSaque){
    if(valorSaque <= saldoFinal) {
      saldoFinal -= valorSaque;
      return {validacao: true, novoSaldo: saldoFinal};
    } else {
      return {validacao: false};
    }
  }
 // Entrada de dados
 let saldoTotal = parseInt(gets());
 let valorSaque = parseInt(gets());
 
 //TODO: Criar as condições necessárias para impressão da saída, vide tabela de exemplos.
 
 const validacaoSaque =  saque(saldoTotal,valorSaque);
 
 if(validacaoSaque.validacao) {
   print(`Saque realizado com sucesso. Novo saldo: ${validacaoSaque.novoSaldo}`);
 } else {
   print('Saldo insuficiente. Saque nao realizado!');
 }