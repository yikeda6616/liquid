import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserOrderStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
