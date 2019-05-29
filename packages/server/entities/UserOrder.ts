import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class UserOrder {
  @PrimaryColumn()
  uid: number;

  @PrimaryGeneratedColumn('uuid')
  oid: string;

  @Column()
  price: number;

  @Column()
  userOrderStatus: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
