import { Account } from 'src/models/account.model';
import { TransactionEntity } from 'src/modules/transactions/entity/transaction.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('account')
export class AccountEntity extends BaseEntity implements Account {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    unique: true
  })
  public number: number;

  @Column()
  public balance: number;

  @OneToMany(() => TransactionEntity, transaction => transaction.account)
  public transactions: TransactionEntity[];

  @CreateDateColumn({ name: 'created_at'})
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at'})
  public updatedAt: Date;
}