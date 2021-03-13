import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from '../entity/account.entity';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService extends TypeOrmCrudService<AccountEntity> {
  constructor(@InjectRepository(AccountEntity) repo: Repository<AccountEntity>) {
    super(repo);
  }
}
