import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products } from './entities/products.entity';
import { ProductsRepository } from './products.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from '../customRespitory/cutomTypeorm.module';

@Module({
   imports: [
      TypeOrmModule.forFeature([Products]),
      CustomTypeOrmModule.forCustomRepository([ProductsRepository]),
   ],
   providers: [ProductsService, ProductsRepository],
   controllers: [ProductsController],
   exports: [ProductsService],
})
export class ProductsModule {}
