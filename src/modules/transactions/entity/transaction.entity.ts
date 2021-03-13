import { TransactionType } from 'src/enums/transaction-type.enum';
import { Transaction } from 'src/models/transaction.model';
import { AccountEntity } from 'src/modules/accounts/entity/account.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity,
  CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';

@Entity('transaction')
export class TransactionEntity extends BaseEntity implements Transaction {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public amount: number;

  @Column()
  public type: TransactionType;

  @ManyToOne(() => AccountEntity, account => account.transactions)
  @JoinColumn({ name: 'account' })
  public account: AccountEntity;

  @CreateDateColumn({ name: 'created_at'})
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at'})
  public updatedAt: Date;
}