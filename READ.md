# Projeto Semana 04 - Arrays, DOM e Eventos

Este repositório contém a resolução dos desafios práticos propostos na semana 04 de Desenvolvimento Web. O projeto demonstra na prática a manipulação de dados utilizando métodos modernos de arrays, a manipulação estrutural e de estilo da página através do DOM e o gerenciamento de interações do usuário por meio de Eventos.

## Manipulação de Arrays

- **`map`**: Utilizado para iterar sobre o array original e retornar um *novo* array com os dados transformados (ex: colocar textos em maiúsculas ou extrair apenas a propriedade 'nome' de objetos).
- **`filter`**: Utilizado para criar um novo array contendo apenas os elementos que passam em uma condição específica (ex: valores maiores que 20 ou menores que 50).
- **`reduce`**: Utilizado para iterar sobre os elementos do array e acumular seus valores em um único valor final de saída (ex: somar todos os preços de um array numérico ou de objetos).
- **`forEach`**: Utilizado apenas para percorrer e executar uma ação para cada item, sem retornar um novo array (ex: imprimir textos ou criar elementos no DOM).

## Manipulação do DOM

O script manipula a página (Document Object Model) em tempo real selecionando elementos (`querySelector` e `querySelectorAll`), alterando conteúdos em texto limpo (`textContent`) ou renderizando tags HTML (`innerHTML`). A criação dinâmica de elementos é feita de forma segura utilizando `createElement` e injetada na página com `append`. Também manipulamos o CSS dinamicamente com o `classList.add` para aplicar estilizações baseadas em estado.

## Eventos e Event Delegation

Capturamos interações comuns, como cliques, passagem do mouse (`mouseover`) e digitação no teclado (`keyup`). 

**O uso do Event Delegation:** 
Ao invés de adicionar um ouvinte de evento de clique (`addEventListener`) para cada `<li>` individual na nossa lista de tarefas, adicionamos um único ouvinte na tag pai (`<ul>`). Utilizando a propriedade `e.target.tagName`, verificamos se o clique foi exatamente em um elemento `LI`. 
Isso otimiza muito a performance do navegador e garante que **novos itens adicionados dinamicamente via JavaScript** (como pelo formulário de tarefas) já nasçam "escutando" e respondendo aos cliques, sem necessidade de atrelar novos eventos a eles.