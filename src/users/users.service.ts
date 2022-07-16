import { Injectable } from '@nestjs/common';
import { Users } from './entities/user.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {}
