import { Account } from 'src/models/account.model';
import { CustomerEntity } from 'src/modules/customers/entity/customer.entity';
import { TransactionEntity } from 'src/modules/transactions/entity/transaction.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('account')
export class AccountEntity extends BaseEntity implements Account {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    unique: true
  })
  public number: number;

  @Column({ type: 'bigint' })
  public balance: number;

  @OneToMany(() => TransactionEntity, transaction => transaction.account)
  public transactions: TransactionEntity[];

  @OneToOne(() => CustomerEntity, customer => customer.account)
  @JoinColumn({ name: 'customer' })
  public customer: CustomerEntity;
}