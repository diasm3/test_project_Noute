import {
   ApiCreatedResponse,
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
} from '@nestjs/common';
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
   @ApiQuery({ name: 'Products', required: false })
   @ApiCreatedResponse({ type: Products })
   @Get()
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
   // @ApiQuery({ name: 'Products', required: false })
   @ApiCreatedResponse({ type: Products })
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
    * @param {string} id
    */
   @ApiOkResponse({ type: Products, isArray: true })
   // @ApiQuery({ name: 'Products', required: false })
   @ApiCreatedResponse({ type: Products })
   @Post('getRandomByCategories')
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
