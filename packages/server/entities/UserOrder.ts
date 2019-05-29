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
  orderStatusId: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
