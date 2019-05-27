import { Entity, Column } from 'typeorm';

@Entity()
export class ProductCategory {
  @Column()
  pid: number;
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
