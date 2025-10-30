// Array de exemplo que simula os dados da API
const livros = [
    {id: 120, titulo: "A Volta ao Mundo em 80 Dias"},
    {id: 456, titulo: "O velho e o menino"},
    {id: 987, titulo: "As coisas que você só vê quando desacelera"},
    {id: 321, titulo: "O Homem que Calculava"}
];

const tbody = document.getElementById('livros-tabela');

// Preencher a tabela com os dados
livros.forEach(livro => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${livro.id}</td>
        <td>${livro.titulo}</td>
        <td>
            <button class="action-btn edit">✏️</button>
            <button class="action-btn delete">🗑️</button>
        </td>
    `;
    tbody.appendChild(tr);
});

// Futuramente você pode substituir o array acima por um fetch API, por exemplo:
// fetch('URL_DA_API')
//   .then(response => response.json())
//   .then(data => {
//       data.forEach(livro => {
//           // mesmo código de criação de <tr>
//       });
//   });
