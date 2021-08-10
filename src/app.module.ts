import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Produto } from './produto.model';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'debian-sys-maint',
    password: 'XoypiJCShhDgUK1x',
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
