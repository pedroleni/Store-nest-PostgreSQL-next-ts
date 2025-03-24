import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Categoria } from 'src/categorias/entities/categoria.entity';
import { UploadImageModule } from 'src/upload-image/upload-image.module';

@Module({
  imports: [TypeOrmModule.forFeature([Producto, Categoria]), UploadImageModule],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
