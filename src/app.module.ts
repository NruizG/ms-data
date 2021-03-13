import { Module } from '@nestjs/common';
import { DatasourceModule } from './datasource/datasource.module';
import { CustomersModule } from './modules/customers/customers.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [
    DatasourceModule,
    CustomersModule,
    AccountsModule,
    TransactionsModule
  ]
})
export class AppModule {}
