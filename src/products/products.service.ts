import { CreateProductsDto, TypeDto } from './dto/products.dto';
import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import * as MOCK_PRODUCTS from '../../data/products.json';

@Injectable()
export class ProductsService {
   constructor(private readonly productsRepository: ProductsRepository) {}

   // getProducts
   async getProducts(): Promise<CreateProductsDto | object> {
      try {
         // const data2 = this.productsRepository.findAll();
         const resultData = MOCK_PRODUCTS.map((data) => data);
         // console.log(data2);
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
         // type 별로 그룹화
         // -> 만약 쿼리로 했을 경우에는...좀더 쉬웠을까?
         // 그룹화 된것중에 Random으로 하나를 가져옴
         const types = [...new Set(MOCK_PRODUCTS.map((data) => data.type))];

         const sort = types.map((type) => {
            const sortedData = MOCK_PRODUCTS.filter((data) =>
               data.type.includes(type)
            );
            return sortedData[Math.floor(Math.random() * sortedData.length)];
         });

         return sort;
      } catch (err) {
         return err.message;
      }
   }
}
