const nomes = ["Carlos", "Beatriz", "Amanda"];
nomes.forEach(nome => console.log(`Olá, ${nome}!`));

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());

const precos = [10, 25, 40, 5, 60];
const precosFiltrados = precos.filter(preco => preco > 20);
const somaPrecos = precos.reduce((acc, preco) => acc + preco, 0);

const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 80 },
  { nome: "Caneta", preco: 5 }
];

const nomesProdutos = produtos.map(p => p.nome);
const produtosBaratos = produtos.filter(p => p.preco < 50);
const somaProdutos = produtos.reduce((acc, p) => acc + p.preco, 0);

produtos.forEach(p => console.log(`Nome: R$ ${p.preco}`));

const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Desenvolvedor";

const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log(p.textContent));

const lista = document.querySelector("#lista");
lista.innerHTML += "<li>Item inserido via innerHTML 1</li><li>Item inserido via innerHTML 2</li>";

const novoItem = document.createElement("li");
novoItem.textContent = "Terceiro item";
lista.append(novoItem);

novoItem.classList.add("destaque");
console.log(novoItem.classList.contains("destaque"));

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach((tarefa, index) => {
  const li = document.createElement("li");
  li.textContent = tarefa;
  if (index === 0) {
    li.classList.add("feito");
  }
  lista.append(li);
});

console.log(document.querySelectorAll("li").length);

const botao = document.querySelector("#botao");
botao.addEventListener("click", () => console.log("Clicou!"));

botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

const inputNome = document.querySelector("#nome");
inputNome.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log(e.target.textContent);
  }
});

const formulario = document.querySelector("#formulario");
const inputTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const textoTarefa = inputTarefa.value.trim();
  
  if (textoTarefa !== "") {
    const li = document.createElement("li");
    li.textContent = textoTarefa;
    lista.append(li);
    inputTarefa.value = "";
  }
});