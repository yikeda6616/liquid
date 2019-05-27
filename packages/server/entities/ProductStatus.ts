import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
