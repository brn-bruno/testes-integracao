export interface ProdutoGet {
    id: number
    nome: string
    preco: number
}

export interface ProdutoCreate {
    nome: string
    preco: number
}