import { Controller } from '@nestjs/common';
import { Crud, CrudController } from "@nestjsx/crud";
import { AccountEntity } from '../entity/account.entity';
import { AccountsService } from '../service/accounts.service';

@Crud({
  model: {
    type: AccountEntity,
  },
  query: {
    join: {
      customer: {
        eager: false
      },
      transactions: {
        eager: false
      }
    }
  }
})
@Controller('accounts')
export class AccountsController implements CrudController<AccountEntity> {
  constructor(public service: AccountsService) {}
}
