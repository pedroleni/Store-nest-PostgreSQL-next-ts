import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Producto } from 'src/productos/entities/producto.entity';
console.log('sdsg', Producto);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfig,
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Producto, Categoria]),
  ],
  providers: [SeederService],
})
export class SeederModule {
  getName() {
    console.log('sdsg', Producto);
  }
}
