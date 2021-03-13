import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { TransactionEntity } from '../entity/transaction.entity';

@Injectable()
export class TransactionsService extends TypeOrmCrudService<TransactionEntity>{
  constructor(@InjectRepository(TransactionEntity) repo) {
    super(repo);
  }
}
