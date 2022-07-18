// import { IsEmail, IsEmpty, IsNotEmpty } from 'class-validator';
import { Orders } from '../../orders/entities/order.entity';
import { Products } from '../../products/entities/products.entity';
import {
   BaseEntity,
   CreateDateColumn,
   Entity,
   ManyToOne,
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
   @ManyToOne(() => Products, (products) => products.id)
   products: Products;

   @ApiProperty()
   @ManyToOne(() => Orders, (orders) => orders.id)
   orders: Orders;
}
