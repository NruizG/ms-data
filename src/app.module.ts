import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatasourceModule } from './datasource/datasource.module';
import { CustomersModule } from './modules/customers/customers.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { TransfersModule } from './modules/transfers/transfers.module';

@Module({
  imports: [
    DatasourceModule,
    CustomersModule,
    AccountsModule,
    TransactionsModule,
    TransfersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
