import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sales } from './entities/sale.entity';
import { SalesController } from './sales.controller';
import { SalesRepository } from './sales.repository';
import { SalesService } from './sales.service';

@Module({
   imports: [TypeOrmModule.forFeature([Sales, SalesRepository])],
   providers: [SalesService],
   controllers: [SalesController],
   exports: [SalesService],
})
export class SalesModule {}
