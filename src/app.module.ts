import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Produto } from './produto.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: process.env.HOST_BANCO_DADOS,
    port: Number(process.env.PORTA_BANCO_DADOS),
    username: process.env.USUARIO_BANCO_DADOS,
    password: process.env.SENHA_BANCO_DADOS,
    database: 'produtos',
    autoLoadModels: true,
    synchronize: true
  }),
  SequelizeModule.forFeature([Produto])
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
