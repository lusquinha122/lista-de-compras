# Lista para armazenar as compras
compras = []

def cadastrar_compra():
    print("Cadastro de Compras")
    print("-------------------")
    
    # Solicita nome e email do cliente
    nome = input("Digite seu nome: ")
    email = input("Digite seu email: ")

    # Detalhes da compra (exemplo, pode ser expandido conforme necessário)
    produto = input("Digite o nome do produto: ")
    quantidade = int(input("Digite a quantidade: "))
    preco_unitario = float(input("Digite o preço unitário: "))
    total = quantidade * preco_unitario

    # Cria um dicionário para representar a compra
    compra = {
        'nome': nome,
        'email': email,
        'produto': produto,
        'quantidade': quantidade,
        'preco_unitario': preco_unitario,
        'total': total
    }

    # Adiciona a compra à lista de compras
    compras.append(compra)

    print("\nCompra cadastrada com sucesso!\n")

def listar_compras():
    print("Listagem de Compras")
    print("-------------------")

    for index, compra in enumerate(compras, start=1):
        print(f"Compra {index}:")
        print(f"Nome: {compra['nome']}")
        print(f"Email: {compra['email']}")
        print(f"Produto: {compra['produto']}")
        print(f"Quantidade: {compra['quantidade']}")
        print(f"Preço Unitário: R${compra['preco_unitario']:.2f}")
        print(f"Total: R${compra['total']:.2f}")
        print("-------------------")

# Menu de interação com o usuário
while True:
    print("MENU")
    print("1 - Cadastrar Compra")
    print("2 - Listar Compras")
    print("3 - Sair")

    opcao = input("Digite sua opção: ")

    if opcao == '1':
        cadastrar_compra()
    elif opcao == '2':
        if compras:
            listar_compras()
        else:
            print("Nenhuma compra cadastrada ainda.\n")
    elif opcao == '3':
        print("Saindo...")
        break
    else:
        print("Opção inválida. Digite novamente.\n")