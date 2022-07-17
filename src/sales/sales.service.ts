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
   async sortedBySales(): Promise<any> {
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
                  orderId: salesData.orderId,
                  productId: productData[0].id,
                  price: productData[0].price,
                  productName: productData[0].name,
                  userName: userData[0].name,
                  userId: orderData[0].userId,
                  gender: userData[0].gender,
                  orderedDate: salesData.orderedAt,
               }),
                  dataResult.push(sortedData);
            });
         });

         return dataResult;
      } catch (err) {
         return err.message;
      }
   }

   // get lowest buyer by transaction
   async getLowestBuyer(): Promise<object[]> {
      try {
         // get sales data with ordered, product, user
         const sortedSaleData = await this.sortedBySales();

         // combine data by userId
         const combineByUserId = sortedSaleData.reduce((acc, curr) => {
            if (typeof acc[curr.userId] == 'undefined') {
               acc[curr.userId] = 1;
            } else {
               acc[curr.userId] += 1;
            }
            return acc;
         }, {});

         // get min value
         const arrayData: number[] = Object.values(combineByUserId);
         const value = Math.min(...arrayData);

         let userId = null;

         arrayData.map((data, index) => {
            if (value === arrayData[index])
               userId = Object.keys(combineByUserId)[index];
         });

         const resultData = MOCK_USERS.filter((data) => {
            if (data.id === parseInt(userId)) return data.name;
         });

         return resultData;
      } catch (err) {
         return err.message;
      }
   }

   async getHighestBuyer(): Promise<object[]> {
      try {
         const sortedSaleData = await this.sortedBySales();

         // join duplicate productName calculate total price
         const dupNamewithPrice = sortedSaleData.reduce((acc, curr) => {
            if (typeof acc[curr.userName] === 'undefined') {
               acc[curr.userName] = curr.price;
            } else {
               acc[curr.userName] += curr.price;
            }
            return acc;
         }, {});

         // get min value
         const arrayData: number[] = Object.values(dupNamewithPrice);
         const value = Math.max(...arrayData);

         let userName = null;

         arrayData.map((data, index) => {
            if (value === arrayData[index])
               userName = Object.keys(dupNamewithPrice)[index];
         });

         const resultData = MOCK_USERS.filter((data) => {
            if (data.name === userName) return data;
         });

         return resultData;
      } catch (err) {
         return err.message;
      }
   }

   async getBestSellerByMonth(month: number): Promise<number> {
      try {
         // get sales data with ordered, product, user
         const sortedSalesData = await this.sortedBySales();
         const array = [];

         // sorted by month add to array
         sortedSalesData.map((salesData) => {
            const monthData = new Date(salesData.orderedDate).getMonth() + 1;

            if (month === monthData) {
               array.push(salesData);
            }
         });

         // join duplicate productName calculate total price
         const dupNamewithPrice = array.reduce((acc, curr) => {
            if (typeof acc[curr.productName] === 'undefined') {
               acc[curr.productName] = curr.price;
            } else {
               acc[curr.productName] += curr.price;
            }
            return acc;
         }, {});

         // get max value
         const selectOnlyPrice: number[] = Object.values(dupNamewithPrice);
         const maxValue = Math.max(...selectOnlyPrice);

         let bestSellerByMonth = null;

         selectOnlyPrice.map((data, index) => {
            if (maxValue === selectOnlyPrice[index])
               bestSellerByMonth = Object.keys(dupNamewithPrice)[index];
         });
         return bestSellerByMonth;
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
               resultArray.push({
                  productName: MOCK_PRODUCTS[Number(productId) - 1].name,
               });
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
         const result = await this.getBestSeller(genderDto);

         return result;
      } catch (err) {
         return err.message;
      }
   }
}
