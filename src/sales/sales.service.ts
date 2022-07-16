import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesRepository } from './sales.repository';
import * as MOCK_SALES from '../../data/sales.json';
import * as MOCK_PRODUCTS from '../../data/products.json';
import * as MOCK_ORDERS from '../../data/orders.json';
import * as MOCK_USERS from '../../data/users.json';
import { GenderDto } from '../users/dto/users.dto';

@Injectable()
export class SalesService {
   constructor(
      @InjectRepository(SalesRepository)
      private readonly salesRepository: SalesRepository
   ) {}


   //salse, order, users join
   async sortedBySales(): Promise<object[]> {
      try {
         let sortedData = {};
         const dataResult = [];

         MOCK_SALES.map((salesData) => {
            // select order info
            const orderData = MOCK_ORDERS.filter(
               (orders_data) => orders_data.id === salesData.orderId
            );

            // select product info
            const productData = MOCK_PRODUCTS.filter(
               (products_data) => products_data.id === salesData.productId
            );

            // select user info
            orderData.map((orders_joined) => {
               const userData = MOCK_USERS.filter(
                  (user_data) => user_data.id === orders_joined.userId
               );

               (sortedData = {
                  saleId: salesData.id,
                  orderedDate: salesData.orderedAt,
                  orderId: salesData.orderId,
                  productId: productData[0].id,
                  price: productData[0].price,
                  productName: productData[0].name,
                  userId: orderData[0].userId,
                  gender: userData[0].gender,
               }),
                  dataResult.push(sortedData);
            });
         });

         return dataResult;
      } catch (err) {
         return err.message;
      }
   }

   async getBestSellerByMonth(month: number): Promise<object[]> {
      try {
         const sortedData = await this.sortedBySales();

         const result = sortedData.map((data) => {
            const monthData = new Date(data.orderedDate).getMonth() + 1;

            if (month === monthData) {
               console.log(data);
               const result = data.reduce((acc, curr) => {
                  console.log('hello world');
                  if (typeof acc[curr.productName] === 'undefined') {
                     // console.log(acc[curr.productName], curr.price);
                     acc[curr.productName] = curr.price;
                  } else {
                     acc[curr.productName] += curr.price;
                  }
                  return acc;
               }, {});
               console.log(result);
            }
         });
         return result;
      } catch (err) {
         return err.message;
      }
   }

   async getBestSeller(genderDto: GenderDto): Promise<object[]> {
      try {
         // load data from sorted data from sortedBySales function
         let sortedData = await this.sortedBySales();

         // 1. sorted by gender 2. select productId 3. delete duplicate by productId
         sortedData = sortedData
            .filter((data) => data.gender.includes(genderDto))
            .map((data) => data.productId)
            .reduce((acc, curr) => {
               if (typeof acc[curr] == 'undefined') {
                  acc[curr] = 1;
               } else {
                  acc[curr] += 1;
               }
               return acc;
            }, {});

         // save product in array by sorted data
         const arr: number[] = Object.values(sortedData);

         // Most best seller product id
         const value = Math.max(...arr);

         // init Array
         const resultArray = [];

         arr.map((data, index) => {
            if (data === value) {
               const productId = Object.keys(sortedData)[index];
               resultArray.push(MOCK_PRODUCTS[Number(productId) - 1].name);
            }
         });

         return resultArray;
      } catch (err) {
         return err.message;
      }
   }

   // getProducts
   async getBestSellerByGender(genderDto: GenderDto): Promise<object[]> {
      try {
         //성별로 최고로 많이 판매된 상품 조회
         const result = await this.getBestSeller(genderDto);

         return result;
      } catch (err) {
         return err.message;
      }
   }
}
