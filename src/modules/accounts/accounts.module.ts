import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsController } from './controller/accounts.controller';
import { AccountEntity } from './entity/account.entity';
import { AccountsService } from './service/accounts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AccountEntity
    ])
  ],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}
