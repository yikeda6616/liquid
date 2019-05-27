import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

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
  createdAt: Timestamp;

  @Column()
  updatedAt: Timestamp;
}
