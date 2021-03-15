import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from 'src/modules/accounts/entity/account.entity';
import { CustomerEntity } from 'src/modules/customers/entity/customer.entity';
import { TransactionEntity } from 'src/modules/transactions/entity/transaction.entity';
import { config } from "dotenv";

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [AccountEntity, CustomerEntity, TransactionEntity],
      synchronize: process.env.DATABASE_SYNCHRONIZE  === 'true' ? true : false,
    }),

  ]
})
export class DatasourceModule {}
