import {
   ApiCreatedResponse,
   ApiNotFoundResponse,
   ApiOkResponse,
   ApiOperation,
   ApiQuery,
   ApiTags,
} from '@nestjs/swagger';
import {
   Body,
   Controller,
   Get,
   Patch,
   Post,
   UseGuards,
   Request,
   Logger,
   BadRequestException,
   UnauthorizedException,
   HttpCode,
   Res,
   Param,
   HttpStatus,
   Query,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { Sales } from './entities/sale.entity';
import { GenderDto } from '../users/dto/users.dto';

@Controller('api/sales')
@ApiTags('sales API')
export class SalesController {
   private logger = new Logger('SalesController');
   constructor(private readonly salesService: SalesService) {}

   /*
    * getBestSellerByGender
    */
   @ApiOkResponse({ type: Sales, isArray: true })
   @ApiQuery({ name: 'Sales', required: false })
   @ApiCreatedResponse({ type: Sales })
   @ApiOperation({
      summary: '성별로 최고로 많이 판매된 상품 조회 API',
      description: '현재 기준 가장 많이 판매된 상품 조회 (성별로 구분)',
   })
   @ApiNotFoundResponse({ description: '잘못된 성별을 입력하셨습니다' })
   @Get('getBestSellerByGender')
   async getBestSellerByGender(
      @Query('gender') genderDto: GenderDto
   ): Promise<object> {
      try {
         this.logger.verbose(`getProducts list`);
         const result = await this.salesService.getBestSellerByGender(
            genderDto
         );

         return { ok: true, data: result };
      } catch (err) {
         return { ok: false, row: err.message };
      }
   }

   /*
    * getBestSellerByGender
    */
   @ApiOkResponse({ type: Sales, isArray: true })
   @ApiQuery({ name: 'Sales', required: false })
   @ApiCreatedResponse({ type: Sales })
   @ApiOperation({
      summary: '성별로 최고로 많이 판매된 상품 조회 API',
      description: '현재 기준 가장 많이 판매된 상품 조회 (성별로 구분)',
   })
   @ApiNotFoundResponse({ description: '잘못된 성별을 입력하셨습니다' })
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
}
