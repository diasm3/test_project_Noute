import { CreateProductsDto } from './dto/products.dto';
import { Controller, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { ProductsRepository } from './products.repository';
import * as MOCK_PRODUCTS from '../../data/products.json';

@Injectable()
export class ProductsService {
   constructor(
      @InjectRepository(ProductsRepository)
      private readonly productsRepository: ProductsRepository
   ) {}

   // getProducts
   async getProducts(): Promise<CreateProductsDto | object> {
      try {
         const resultData = MOCK_PRODUCTS.map((data) => data);
         return resultData;
      } catch (err) {
         return err.message;
      }
   }

   getData() {
      const resultData = MOCK_PRODUCTS.map((data) => data);
      return resultData[0];
   }
}
