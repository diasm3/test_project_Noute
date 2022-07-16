import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from '../config';
import { UserRepository } from '../src/users/users.repository';
import { ProductsModule } from './products/products/products.module';
import { ProductsService } from './products/products.service';
import { ProductsRepository } from './products/products.repository';
import { ProductsController } from './products/products.controller';

@Module({
   imports: [
      TypeOrmModule.forRoot(typeORMConfig),
      TypeOrmModule.forFeature([UserRepository, ProductsRepository]),
      ProductsModule,
      // ProductsRepository,
   ],
   controllers: [AppController, ProductsController],
   providers: [AppService, ProductsService],
})
export class AppModule {}
