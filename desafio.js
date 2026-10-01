const usuarios = [
  { id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
  { id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
  { id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
  { id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" }
];

const listarusuarios = usuarios.map ((usuarios) => {
    return {
        nome: usuarios.nome,
        cargo: usuarios.cargo
    };
});
console.log(listarusuarios);


const buscarUsuarioporId = usuarios.findIndex ((u) => u.id === 2)
console.log(buscarUsuarioporId);



const usuariosAtivos = usuarios.filter((usuario) => usuario.ativo);

console.log('Usuários:', usuarios);
console.log('Lista de usuários ativos:', usuariosAtivos);


const existeUsuariosInativos = usuarios.some((usuario) => !usuario.ativo);

console.log('Usuários:', usuarios);
console.log('Existe algum usuário inativo?', existeUsuariosInativos);



const maiorQue18 = usuarios.every((usuario) => usuario.idade > 18);

console.log('Usuários:', usuarios);
console.log('Todos os usuários têm idade maior que 18?', maiorQue18);



const somaIdades = usuarios.reduce((acumulador, usuario) => {
    return acumulador + usuario.idade;
}, 0);

console.log('Usuários:', usuarios);
console.log('Soma das idades:', somaIdades);