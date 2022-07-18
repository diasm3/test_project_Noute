import { IsNotEmpty } from 'class-validator';
import { PickType } from '@nestjs/swagger';

export class CreateProductsDto {
   @IsNotEmpty()
   id: number;

   @IsNotEmpty()
   // @ApiProperty({ type: 'diary' })
   type: string;

   @IsNotEmpty()
   name: string;

   @IsNotEmpty()
   description: string;

   @IsNotEmpty()
   price: number;
}

//[ 'diary', 'sticker', 'note', 'brush' ]
export class TypeDto extends PickType(CreateProductsDto, ['type'] as const) {}
export enum CategoryType {
   diary = 'diary',
   sticker = 'sticker',
   note = 'note',
   brush = 'brush',
}

export enum MonthType {
   Jan = '1',
   Feb = '2',
   Mar = '3',
   Apr = '4',
   May = '5',
   Jun = '6',
   Jul = '7',
   Aug = '8',
   Sep = '9',
   Oct = '10',
   Nov = '11',
   Dec = '12',
}
