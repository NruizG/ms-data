import { Customer } from 'src/models/customer.model';
import { AccountEntity } from 'src/modules/accounts/entity/account.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn,
  BaseEntity, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate 
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('customer')
export class CustomerEntity extends BaseEntity implements Customer {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public dni: string;

  @Column({
    unique: true
  })
  public email: string;

  @Column()
  public password: string;

  @OneToOne(() => AccountEntity)
  @JoinColumn({ name: 'account' })
  public account: AccountEntity;

  @CreateDateColumn({ name: 'created_at'})
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at'})
  public updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  public hashPassword(): void{
    if (this.password) {
      const salt = bcrypt.genSaltSync(8);
      this.password = bcrypt.hashSync(this.password, salt);
    }
  }
}