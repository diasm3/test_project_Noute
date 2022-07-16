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
   async getProducts(): Promise<object> {
      try {
         this.logger.verbose(`getProducts list`);
         const result = await this.productsService.getProducts();

         return { ok: true, data: result };
         // return res.status(HttpStatus.OK).json(result);
      } catch (err) {
         return { ok: false, row: err.message };
      }
   }
}
