import { IsEmail, IsEmpty, IsNotEmpty } from 'class-validator';
import { Orders } from '../../orders/entities/order.entity';
import {
   BaseEntity,
   Column,
   Entity,
   JoinColumn,
   OneToMany,
   PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Users extends BaseEntity {
   /* User Id */
   @PrimaryGeneratedColumn()
   @ApiProperty()
   id: number;

   /* User Email */
   @IsEmail()
   @ApiProperty()
   @Column({
      type: 'varchar',
      length: 128,
      unique: true,
   })
   email: string;

   /* User Name */
   @IsNotEmpty()
   @ApiProperty()
   @Column({
      type: 'varchar',
      length: 20,
      unique: true,
   })
   name: string;

   /* User gender*/
   @IsNotEmpty()
   @ApiProperty()
   @Column({
      type: 'varchar',
      default: 'mbti',
      length: 10,
   })
   gender: string;

   /* 테이블 관계 */

   /*   */
   @ApiProperty()
   @OneToMany((type) => Orders, (order) => order.user)
   @JoinColumn({ name: 'id' })
   order: Orders[];
}
