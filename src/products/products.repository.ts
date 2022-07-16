import { Repository, DataSource } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { Products } from '../products/entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsRepository extends Repository<Products> {
   /* 댓글 업로드 퀘스트 수행 */
   private logger = new Logger('ProductsRepository');

   constructor(private dataSource: DataSource) {
      super(Products, dataSource.createEntityManager());
   }
   // getProducts
   findAll(): Promise<Products[]> {
      return this.find();
   }

   async getProducts(): Promise<Products | undefined> {
      try {
         this.logger.verbose('repository');
         const result = await this.find();
         console.log('hello');
         console.log(result);
         this.logger.verbose(result);
         return undefined;
      } catch (err) {
         return undefined;
      }
   }
   async getProductsByType(type: string): Promise<Products | undefined> {
      try {
         this.logger.verbose('repository');
         console.log(type);
         // const result = await this.find({ type });
         // this.logger.verbose(result);
         return undefined;
      } catch (err) {
         return undefined;
      }
   }
}
