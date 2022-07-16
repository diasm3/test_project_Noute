import { Module } from '@nestjs/common';
import { ProductsService } from '../products.service';
import { ProductsController } from '../products.controller';
import { Products } from '../entities/products.entity';
import { ProductsRepository } from '../products.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [TypeOrmModule.forFeature([Products])],
   providers: [ProductsService, ProductsRepository],
   controllers: [ProductsController],
   exports: [ProductsService],
})
export class ProductsModule {}
