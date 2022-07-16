import { IsEmail, IsNotEmpty } from 'class-validator';
import { PickType } from '@nestjs/swagger';

export class CreateProductsDto {
   @IsNotEmpty()
   id: number;

   @IsNotEmpty()
   type: string;

   @IsNotEmpty()
   name: string;

   @IsNotEmpty()
   description: string;

   @IsNotEmpty()
   price: number;
}

export class TypeDto extends PickType(CreateProductsDto, ['type'] as const) {}
