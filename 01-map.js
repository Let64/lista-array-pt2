const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const nomeProdutos = produtos.map ((produtos) => {
    return {
        nome: produtos.nome.toUpperCase()
    };
});

console.log(nomeProdutos);
console.log("\n");


const produtos1 = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const produtoComDesconto = produtos1.map ((produtos1) => {
    return {
        nome: produtos1.nome,
        preco: `R$ ${produtos1.preco * 0.9}`,
    };
});

console.log(produtoComDesconto);
console.log("\n");


