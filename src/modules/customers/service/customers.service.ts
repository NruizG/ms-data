import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from 'typeorm';
import { CustomerEntity } from '../entity/customer.entity';

@Injectable()
export class CustomersService extends TypeOrmCrudService<CustomerEntity> {
  constructor(@InjectRepository(CustomerEntity) repo: Repository<CustomerEntity>) {
    super(repo);
  }
}
