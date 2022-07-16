import { IsEmail, IsNotEmpty } from 'class-validator';
import { PickType } from '@nestjs/swagger';

export class CreateUsersDto {
   @IsNotEmpty()
   id: number;

   @IsNotEmpty()
   email: string;

   @IsNotEmpty()
   name: string;

   @IsNotEmpty()
   gender: string;
}

export class GenderDto extends PickType(CreateUsersDto, ['gender'] as const) {}
