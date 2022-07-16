import { Users } from '../../users/entities/user.entity';
import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orders extends BaseEntity {
   /* Order Id */
   @PrimaryGeneratedColumn()
   id: number;

   /* 테이블 관계 */
   @ManyToOne((type) => Users, (user) => user.order)
   user: Users;
}
