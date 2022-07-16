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
   async getProducts(): Promise<Products | undefined> {
      try {
         console.log('service');
         // console.log(json(MOCK_PRODUCTS));
         return undefined;
      } catch (err) {
         return err.message;
      }
   }
}
