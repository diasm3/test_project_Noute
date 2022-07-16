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

@Entity()
export class Users extends BaseEntity {
   /* User Id */
   @PrimaryGeneratedColumn()
   id: number;

   /* User Email */
   @IsEmail()
   @Column({
      type: 'varchar',
      length: 128,
      unique: true,
   })
   email: string;

   /* User Name */
   @IsNotEmpty()
   @Column({
      type: 'varchar',
      length: 20,
      unique: true,
   })
   name: string;

   /* User gender*/
   @IsNotEmpty()
   @Column({
      type: 'varchar',
      default: 'mbti',
      length: 10,
   })
   gender: string;

   /* 테이블 관계 */

   /*   */
   @OneToMany((type) => Orders, (order) => order.user)
   @JoinColumn({ name: 'id' })
   order: Orders[];

   //    @OneToMany((type) => Comment, (comment) => comment.player)
   //    @JoinColumn({ name: 'id' })
   //    comments: Comment[];

   //    @OneToMany((type) => Likes, (like) => like.player)
   //    likes: Likes[];

   //    @OneToMany((type) => Complete, (complete) => complete.player)
   //    @JoinColumn({ name: 'id' })
   //    completes: Complete[];

   //    @OneToMany((type) => Likes, (achievement) => achievement.player)
   //    achievements: Achievement[];
}
