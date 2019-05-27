import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
