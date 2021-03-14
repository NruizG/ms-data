import { Controller } from '@nestjs/common';
import { Crud, CrudController } from "@nestjsx/crud";
import { CustomerEntity } from '../entity/customer.entity';
import { CustomersService } from '../service/customers.service';

@Crud({
  model: {
    type: CustomerEntity,
  }
})
@Controller('customers')
export class CustomersController implements CrudController<CustomerEntity> {
  constructor(public service: CustomersService) {}
}
