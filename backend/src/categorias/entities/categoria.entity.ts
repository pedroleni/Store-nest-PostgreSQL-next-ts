import { Producto } from 'src/productos/entities/producto.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
/// utlizamos el data mapper
@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  name: string;

  @OneToMany(() => Producto, (producto) => producto.category, { cascade: true })
  products: Producto[];
}
