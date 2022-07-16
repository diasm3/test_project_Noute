import { IsEmail, IsNotEmpty } from 'class-validator';
import { PickType } from '@nestjs/swagger';

export class CreateSalesDto {
   @IsNotEmpty()
   id: number;

   @IsNotEmpty()
   orderId: number;

   @IsNotEmpty()
   productId: number;

   @IsNotEmpty()
   orderdAt: Date;
}

// export class DateDto extends PickType(CreateSalesDto, ['orderdAt'] as const) {}
