import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from 'src/modules/accounts/entity/account.entity';
import { CustomerEntity } from 'src/modules/customers/entity/customer.entity';
import { TransactionEntity } from 'src/modules/transactions/entity/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '35.199.86.40',
      port: 3306,
      username: 'root',
      password: 'shadowfax',
      database: 'minibank',
      entities: [AccountEntity, CustomerEntity, TransactionEntity],
      synchronize: true,
    }),

  ]
})
export class DatasourceModule {}
