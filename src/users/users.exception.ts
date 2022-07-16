import {
   BadRequestException,
   HttpStatus,
   Injectable,
   InternalServerErrorException,
   NotFoundException,
} from '@nestjs/common';

@Injectable()
export class UsersException {
   // API 조회 오류
   NotFoundUsers() {
      throw new NotFoundException({
         statusCode: HttpStatus.NOT_FOUND,
         ok: false,
         message: '삭제되었거나 존재하지 않는 피드입니다.',
         error: 'Not Found',
      });
   }

   FeedNotMatch() {
      throw new BadRequestException({
         statusCode: HttpStatus.BAD_REQUEST,
         ok: false,
         message: 'feed타입의 퀘스트가 아닙니다.',
         error: 'Bad Request',
      });
   }

   // DB 트랜젝션 오류
   Transaction() {
      throw new InternalServerErrorException({
         statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
         ok: false,
         message: '처리 중에 예기치 않은 오류가 발생하였습니다.',
         error: 'Internal Server Error',
      });
   }
}
