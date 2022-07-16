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
import * as MOCK_PRODUCTS from '../../data/products.json';

@Controller('api/products')
@ApiTags('products API')
export class ProductsController {
   private logger = new Logger('ProductsController');
   constructor(private readonly productsService: ProductsService) {}

   /*
    * getProducts 요청에 대한 응답
    */
   @ApiOkResponse({ type: Products, isArray: true })
   @ApiQuery({ name: 'Products', required: false })
   @ApiCreatedResponse({ type: Products })
   @Get()
   async getProducts(@Res() res: Response): Promise<object> {
      try {
         this.logger.verbose(`getProducts list`);
         console.log('helloworld');
         const result = this.productsService.getProducts();
         console.log(JSON.stringify(MOCK_PRODUCTS[0].id));
         return undefined;
         // return res.status(HttpStatus.OK).json(result);
      } catch (err) {
         return { ok: false, row: err.message };
      }
   }
}
