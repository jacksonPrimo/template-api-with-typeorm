import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    age: number;
}
