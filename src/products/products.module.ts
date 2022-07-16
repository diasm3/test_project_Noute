import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
   // imports: [
   //    // TypeOrmModule.forFeature([Products]),
   //    // CustomTypeOrmModule.forCustomRepository([ProductsRepository]),
   // ],
   providers: [ProductsService],
   controllers: [ProductsController],
   exports: [ProductsService],
})
export class ProductsModule {}
