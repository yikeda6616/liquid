import { Entity, Column, Timestamp } from 'typeorm';

@Entity()
export class ProductCategory {
  @Column()
  pid: number;
  cid: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
