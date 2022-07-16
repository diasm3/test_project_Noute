import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products extends BaseEntity {
   /* Products Id */
   @PrimaryGeneratedColumn()
   id: number;

   /* Product type */
   @IsNotEmpty()
   @Column({
      type: 'varchar',
      length: 100,
   })
   type: string;

   /* Product Name*/
   @IsNotEmpty()
   @Column({
      type: 'varchar',
      length: 50,
      unique: true,
   })
   name: string;

   /* Product description */
   @IsNotEmpty()
   @Column({
      type: 'varchar',
      length: 300,
   })
   description: string;

   /* Product price*/
   @IsNotEmpty()
   @Column({
      default: 1,
   })
   price: number;
}
