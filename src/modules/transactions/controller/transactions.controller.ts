import { Controller } from '@nestjs/common';
import { Crud, CrudController } from "@nestjsx/crud";
import { TransactionEntity } from '../entity/transaction.entity';
import { TransactionsService } from '../service/transactions.service';

@Crud({
  model: {
    type: TransactionEntity,
  },
})
@Controller('transactions')
export class TransactionsController implements CrudController<TransactionEntity> {
  constructor(public service: TransactionsService) {}
}
