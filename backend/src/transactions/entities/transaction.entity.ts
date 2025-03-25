import { Producto } from 'src/productos/entities/producto.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  total: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  coupon: string;

  @Column({ type: 'decimal', nullable: true, default: 0 })
  discount: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  transactionDate: Date;

  @OneToMany(
    () => TransactionContents,
    (transaction) => transaction.transaction,
  )
  contents: TransactionContents[];
}

@Entity()
export class TransactionContents {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  quantity: number;

  @Column('decimal')
  price: number;

  @ManyToOne(() => Producto, (product) => product.id, {
    eager: true,
    cascade: true,
  })
  product: Producto;

  @ManyToOne(() => Transaction, (transaction) => transaction.contents, {
    cascade: true,
  })
  transaction: Transaction;
}
