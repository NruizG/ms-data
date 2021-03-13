import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsController } from './controller/transactions.controller';
import { TransactionEntity } from './entity/transaction.entity';
import { TransactionsService } from './service/transactions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TransactionEntity
    ])
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule {}
