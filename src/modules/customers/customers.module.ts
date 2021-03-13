import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './controller/customers.controller';
import { CustomerEntity } from './entity/customer.entity';
import { CustomersService } from './service/customers.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerEntity
    ])
  ],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {}
