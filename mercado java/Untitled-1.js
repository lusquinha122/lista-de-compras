// Lista para armazenar as compras
let compras = [];

function cadastrarCompra() {
    console.log("Cadastro de Compras");
    console.log("-------------------");

    // Solicita nome e email do cliente
    let nome = prompt("Digite seu nome: ");
    let email = prompt("Digite seu email: ");

    // Detalhes da compra (exemplo, pode ser expandido conforme necessário)
    let produto = prompt("Digite o nome do produto: ");
    let quantidade = parseInt(prompt("Digite a quantidade: "));
    let precoUnitario = parseFloat(prompt("Digite o preço unitário: "));
    let total = quantidade * precoUnitario;

    // Cria um objeto para representar a compra
    let compra = {
        nome: nome,
        email: email,
        produto: produto,
        quantidade: quantidade,
        precoUnitario: precoUnitario,
        total: total.toFixed(2)  // Formata para duas casas decimais
    };

    // Adiciona a compra à lista de compras
    compras.push(compra);

    console.log("\nCompra cadastrada com sucesso!\n");
}

function listarCompras() {
    console.log("Listagem de Compras");
    console.log("-------------------");

    compras.forEach((compra, index) => {
        console.log(`Compra ${index + 1}:`);
        console.log(`Nome: ${compra.nome}`);
        console.log(`Email: ${compra.email}`);
        console.log(`Produto: ${compra.produto}`);
        console.log(`Quantidade: ${compra.quantidade}`);
        console.log(`Preço Unitário: R$${compra.precoUnitario.toFixed(2)}`);
        console.log(`Total: R$${compra.total}`);
        console.log("-------------------");
    });
}

// Menu de interação com o usuário
while (true) {
    console.log("MENU");
    console.log("1 - Cadastrar Compra");
    console.log("2 - Listar Compras");
    console.log("3 - Sair");

    let opcao = prompt("Digite sua opção: ");

    if (opcao === '1') {
        cadastrarCompra();
    } else if (opcao === '2') {
        if (compras.length > 0) {
            listarCompras();
        } else {
            console.log("Nenhuma compra cadastrada ainda.\n");
        }
    } else if (opcao === '3') {
        console.log("Saindo...");
        break;
    } else {
        console.log("Opção inválida. Digite novamente.\n");
    }
}
