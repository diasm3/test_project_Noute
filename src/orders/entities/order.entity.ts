import { Users } from '../../users/entities/user.entity';
import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Orders extends BaseEntity {
   /* Order Id */
   @PrimaryGeneratedColumn()
   @ApiProperty()
   id: number;

   /* 테이블 관계 */
   // @ApiProperty()
   @ManyToOne((type) => Users, (user) => user.order)
   user: Users;
}
