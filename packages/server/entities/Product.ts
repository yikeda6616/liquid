import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  productStatusId: number;

  @Column()
  createdAt: Timestamp;

  @Column()
  updatedAt: Timestamp;
}
