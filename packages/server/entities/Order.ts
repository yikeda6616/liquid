import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  oid: string;

  @Column()
  uid: number;

  @Column()
  price: number;

  @Column()
  orderStatusId: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
