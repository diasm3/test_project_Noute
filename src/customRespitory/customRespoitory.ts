import { SetMetadata } from '@nestjs/common';
import { BaseEntity } from 'typeorm';

export const TYPEORM_CUSTOM_REPOSITORY = 'TYPEORM_CUSTOM_REPOSITORY';

export function CustomRepository(entity: Function): ClassDecorator {
   return SetMetadata(TYPEORM_CUSTOM_REPOSITORY, entity);
}
