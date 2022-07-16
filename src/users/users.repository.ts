import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Users } from './entities/user.entity';

@Injectable()
export class UserRepository extends Repository<Users> {
   /* 댓글 업로드 퀘스트 수행 */
   constructor(private dataSource: DataSource) {
      super(Users, dataSource.createEntityManager());
   }
   async createComment(
      playerId: number,
      feedId: number,
      comment: string
   ): Promise<Users | undefined> {
      // return await this.createQueryBuilder()
      return undefined;
   }

   /* 댓글 삭제 */
   async deleteComment(commentId: number) {}
}
