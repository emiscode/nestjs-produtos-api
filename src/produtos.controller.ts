import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {
    constructor(private produtosService: ProdutosService) { }

    @Get()
    async listarProdutos() : Promise<Produto[]> {
        return this.produtosService.obterTodos();
    }

    @Get(':id')
    async obterProduto(@Param() params) : Promise<Produto> {
        return this.produtosService.obterProduto(params.id);
    }

    @Post()
    async criar(@Body() produto) {
        this.produtosService.criarProduto(produto)
    }

    @Put()
    async alterar(@Body() produto): Promise<[number, Produto[]]>{
        return this.produtosService.alterarProduto(produto);
    }

    @Delete(':id')
    async remover(@Param() params){
        this.produtosService.removerProduto(params.id);
    }
}