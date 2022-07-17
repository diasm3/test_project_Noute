import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty, PickType } from '@nestjs/swagger';

export class CreateSalesDto {
   @IsNotEmpty()
   // @ApiProperty()
   id: number;

   @IsNotEmpty()
   orderId: number;

   @IsNotEmpty()
   productId: number;

   @IsNotEmpty()
   orderdAt: Date;
}

// export class DateDto extends PickType(CreateSalesDto, ['orderdAt'] as const) {}
