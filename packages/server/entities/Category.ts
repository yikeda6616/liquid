import { Entity, PrimaryGeneratedColumn, Timestamp, Column } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdAt: Timestamp;

  @Column()
  updatedAt: Timestamp;
}
