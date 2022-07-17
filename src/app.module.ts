import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from '../config';
import { UserRepository } from './users/users.repository';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { ProductsRepository } from './products/products.repository';
import { ProductsController } from './products/products.controller';
import { SalesModule } from './sales/sales.module';
import { SalesController } from './sales/sales.controller';
import { SalesService } from './sales/sales.service';
import { SalesRepository } from './sales/sales.repository';
import { TypeOrmExModule } from './customRespitory/cutomTypeorm.module';

@Module({
   imports: [
      TypeOrmModule.forRoot(typeORMConfig),
      TypeOrmModule.forFeature([
         UserRepository,
         ProductsRepository,
         SalesRepository,
      ]),
      TypeOrmExModule.forCustomRepository([ProductsModule]),
      ProductsModule,
      SalesModule,
      ProductsRepository,
   ],
   controllers: [ProductsController, SalesController],
   providers: [ProductsService, SalesService],
})
export class AppModule {}
