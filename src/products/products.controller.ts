import {
   ApiBody,
   ApiOkResponse,
   ApiOperation,
   ApiResponse,
   ApiTags,
} from '@nestjs/swagger';
import { Body, Controller, Get, Post, Logger } from '@nestjs/common';
import { Products } from './entities/products.entity';
import { ProductsService } from './products.service';
import { TypeDto } from './dto/products.dto';

@Controller('api/products')
@ApiTags('products API')
export class ProductsController {
   private logger = new Logger('ProductsController');
   constructor(private readonly productsService: ProductsService) {}

   /*
    * getProducts Request response
    */
   @ApiOkResponse({ type: Products, isArray: true })
   @ApiResponse({
      status: 200,
      description: 'The record has been successfully created.',
   })
   @ApiOperation({
      summary: '전체 상품 조회 API',
      description: '전체 상품 조회를 할 수 있습니다.',
   })
   @Get('getProducts')
   async getProducts(): Promise<object> {
      try {
         this.logger.verbose(`getProducts list`);
         const result = await this.productsService.getProducts();

         /*
          * return data with status code 200
          */
         return { ok: true, data: result };
      } catch (err) {
         return { ok: false, row: err.message };
      }
   }

   /*
    * getByCategories
    * @param {string} id
    */
   @ApiOkResponse({ type: Products, isArray: true })
   @ApiResponse({
      status: 201,
      description: 'successfully loaded',
   })
   // @ApiCreatedResponse({ type: })
   @ApiOperation({
      summary: '상품목록을 카테고리로 검색해서 가져옵니다. ',
      description: '카테고리를 입력하면 상품목록을 가져옵니다',
   })
   @ApiBody({ type: 'type' })
   @Post('/getByCategories')
   async getByCategories(@Body() typeDto: TypeDto): Promise<object> {
      try {
         const { type } = typeDto;
         this.logger.verbose(`filter by type : ${type}`);
         const result = await this.productsService.getByCategories({ type });

         /*
          * return data with status code 200
          */
         return { ok: true, data: result };
      } catch (err) {
         return { ok: false, row: err.message };
      }
   }

   /*
    * getRandomByCategories
    */
   @ApiOkResponse({ type: Products, isArray: true })
   @ApiOperation({
      summary: '각 카테고리별 상품 하나를 랜덤으로 가져옵니다.',
      description: '카테고리별 상품 하나씩을 랜덤으로 가져 옵니다.',
   })
   // @ApiQuery({ name: 'Products', required: false })
   @Get('getRandomByCategories')
   async getRandomByCategories(): Promise<object> {
      try {
         this.logger.verbose(`randomly selected product by type  `);
         const result = await this.productsService.getRandomByCategories();

         /*
          * return data with status code 200
          */
         return { ok: true, data: result };
      } catch (err) {
         return { ok: false, row: err.message };
      }
   }
}
