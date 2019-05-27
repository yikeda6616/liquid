import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  productStatusId: number;

  @Column()
  stock: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
