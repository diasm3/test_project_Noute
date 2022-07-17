import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { ProductsRepository } from './products.repository';
import { TypeOrmExModule } from '../customRespitory/cutomTypeorm.module';

@Module({
   imports: [
      TypeOrmModule.forFeature([Products]),
      TypeOrmExModule.forCustomRepository([ProductsRepository]),
   ],
   providers: [ProductsService],
   controllers: [ProductsController],
   exports: [ProductsService],
})
export class ProductsModule {}
