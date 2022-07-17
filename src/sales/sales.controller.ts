import {
   ApiCreatedResponse,
   ApiNotFoundResponse,
   ApiOkResponse,
   ApiOperation,
   ApiQuery,
   ApiTags,
} from '@nestjs/swagger';
import { Controller, Get, Logger, Query } from '@nestjs/common';
import { SalesService } from './sales.service';
import { Sales } from './entities/sale.entity';
import { GenderDto, GenderType } from '../users/dto/users.dto';
import { MonthType } from '../products/dto/products.dto';
import { Users } from '../users/entities/user.entity';

@Controller('api/sales')
@ApiTags('sales API')
export class SalesController {
   private logger = new Logger('SalesController');
   constructor(private readonly salesService: SalesService) {}

   /*
    * getBestSellerByGender
    */
   @ApiOkResponse({ type: Users, isArray: true })
   @ApiCreatedResponse({ type: Users })
   @ApiOperation({
      summary: '성별로 최고로 많이 판매된 상품 조회 API',
      description: '현재 기준 가장 많이 판매된 상품 조회 (성별로 구분)',
   })
   @ApiNotFoundResponse({ description: '잘못된 성별을 입력하셨습니다' })
   @ApiQuery({ name: 'gender', enum: GenderType })
   @Get('getBestSellerByGender')
   async getBestSellerByGender(
      @Query('gender') genderDto: GenderDto
   ): Promise<object> {
      try {
         this.logger.verbose(`best seller by gender`);
         const result = await this.salesService.getBestSellerByGender(
            genderDto
         );

         return { ok: true, data: result };
      } catch (err) {
         return { ok: false, row: err.message };
      }
   }

   /*
    * getBestSellerByMonth
    */
   @ApiOkResponse({ type: Sales, isArray: true })
   @ApiQuery({
      name: 'month',
      enum: MonthType,
   })
   @ApiCreatedResponse({ type: Sales })
   @ApiOperation({
      summary: '월별 판매금액이 가장 높은 상품을 조회 API',
      description: '주어진 달에 대한 최고 판매금액을 조회합니다',
   })
   @ApiNotFoundResponse({
      description: '숫자를 입력해주시거나 1~12까지 입력해주세요',
   })
   @Get('getBestSellerByMonth')
   async getBestSellerByMonth(@Query('month') month: number): Promise<object> {
      try {
         this.logger.verbose(`getBestSellerByMonth`);
         const result = await this.salesService.getBestSellerByMonth(
            Number(month)
         );

         return { ok: true, data: result };
      } catch (err) {
         return { ok: false, row: err.message };
      }
   }

   /*
    * get
    */
   @ApiOkResponse({ type: Sales, isArray: true })
   @ApiCreatedResponse({ type: Sales })
   @ApiOperation({
      summary: '구매횟수가 가장 적은 회원과, 구매 총액이 가장 높은 회원의 이름',
      description:
         '구매횟수가 가장 적은 회원, 구매 총 금액 가장 높은 회원, 동시에 같은 조건이면 한사람의 이름만 출력',
   })
   @ApiNotFoundResponse({ description: '정상적으로 출력되었습니다' })
   @Get('getLowestBuyer')
   async getLowestBuyer(): Promise<object> {
      try {
         this.logger.verbose(`getLowestBuyer`);
         const customer1: object = await this.salesService.getLowestBuyer();
         const customer2: object = await this.salesService.getHighestBuyer();

         const customerName1 = customer1[0].name;
         const customerName2 = customer2[0].name;

         if (customerName1 === customerName2) {
            return { ok: true, data: customerName1 };
         }

         return {
            ok: true,
            low: customerName1,
            vip: customerName2,
         };
      } catch (err) {
         return { ok: false, row: err.message };
      }
   }
}
