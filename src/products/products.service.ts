import { CreateProductsDto, TypeDto } from './dto/products.dto';
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

   async getByCategories(
      typeDto: TypeDto
   ): Promise<CreateProductsDto | object> {
      try {
         const { type } = typeDto;

         const resultData = MOCK_PRODUCTS.filter((data) =>
            data.type.includes(type)
         );
         return resultData;
      } catch (err) {
         return err.message;
      }
   }

   async getRandomByCategories(): Promise<CreateProductsDto | object> {
      try {
         const resultData = MOCK_PRODUCTS.filter((data) =>
            data.type.includes('hello')
         );

         return resultData;
      } catch (err) {
         return err.message;
      }
   }
}
