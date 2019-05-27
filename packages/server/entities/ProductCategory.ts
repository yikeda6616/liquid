import { Entity, Column, Timestamp } from 'typeorm';

@Entity()
export class ProductCategory {
  @Column()
  pid: number;
  id: number;
  name: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
