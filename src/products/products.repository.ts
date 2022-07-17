import { Repository, DataSource } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { Products } from '../products/entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRepository } from '../customRespitory/typeorm-ex.decorator ';

// @Injectable()
@CustomRepository(Products)
export class ProductsRepository extends Repository<Products> {
   private logger = new Logger('ProductsRepository');

   // getProducts
   public findAll(): Promise<Products[]> {
      return this.find();
   }

   public async getProducts(): Promise<Products | undefined> {
      try {
         this.logger.verbose('repository');
         const query = this.createQueryBuilder('Products').where(
            'products.type = :type',
            { type: '생수' }
         );
         const result = await query.getOne();
         console.log(result);
         return undefined;
      } catch (err) {
         return undefined;
      }
   }

   async getProductsByType(type: string): Promise<Products | undefined> {
      try {
         this.logger.verbose('repository');
         console.log(type);
         return undefined;
      } catch (err) {
         return undefined;
      }
   }
}
