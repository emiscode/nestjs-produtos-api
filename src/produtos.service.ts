import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Produto } from "./produto.model"

@Injectable()
export class ProdutosService {

    constructor(
        @InjectModel(Produto)
        private produtoModel: typeof Produto
    ) {}
    
    async obterTodos(): Promise<Produto[]> {
        return this.produtoModel.findAll();
    }

    async obterProduto(id: string): Promise<Produto> {
        return this.produtoModel.findByPk(id);
    }

    async criarProduto(produto: Produto) {
        this.produtoModel.create(produto);
    }

    async alterarProduto(produto: Produto): Promise<[number, Produto[]]> {
        return this.produtoModel.update(produto, {
            where: {
                id: produto.id
            }
        });
    }

    async removerProduto(id: string) {
        const produto: Produto = await this.obterProduto(id);
        produto.destroy();
    }
}