import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
/// utlizamos el data mapper
@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  name: string;
}
