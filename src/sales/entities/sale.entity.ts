import { IsEmail, IsEmpty, IsNotEmpty } from 'class-validator';
import { Users } from '../../users/entities/user.entity';
import { Orders } from '../../orders/entities/order.entity';
import { Products } from '../../products/entities/products.entity';
import {
   BaseEntity,
   Column,
   CreateDateColumn,
   Entity,
   JoinColumn,
   ManyToOne,
   OneToMany,
   PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Sales extends BaseEntity {
   /* Sale Id */
   @PrimaryGeneratedColumn()
   @ApiProperty()
   id: number;

   @CreateDateColumn({})
   @ApiProperty()
   createdAt: Date;

   /* 테이블 관계 */

   @ApiProperty()
   @ManyToOne((type) => Products, (products) => products.id)
   products: Products;

   @ApiProperty()
   @ManyToOne((type) => Orders, (orders) => orders.id)
   orders: Orders;
}
