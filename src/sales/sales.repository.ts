import { Repository, DataSource } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { Sales } from './entities/sale.entity';

@Injectable()
export class SalesRepository extends Repository<Sales> {
   private logger = new Logger('SalesRepository');

   constructor(private dataSource: DataSource) {
      super(Sales, dataSource.createEntityManager());
   }
   async findAll(): Promise<Sales[]> {
      try {
         this.logger.verbose('findAll');
         console.log('repository');
         return this.find();
      } catch (err) {
         console.log(err.message);
      }
   }

   //    async get(): Promise<Sales | undefined> {
   //       try {
   //          this.logger.verbose('repository');
   //          const result = await this.find();
   //          console.log('hello');
   //          console.log(result);
   //          this.logger.verbose(result);
   //          return undefined;
   //       } catch (err) {
   //          return undefined;
   //       }
   //    }
   //    async getProductsByType(type: string): Promise<Products | undefined> {
   //       try {
   //          this.logger.verbose('repository');
   //          console.log(type);
   //          // const result = await this.find({ type });
   //          // this.logger.verbose(result);
   //          return undefined;
   //       } catch (err) {
   //          return undefined;
   //       }
   //    }
}
