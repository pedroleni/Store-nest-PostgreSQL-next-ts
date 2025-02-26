import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

import { CuponesModule } from './cupones/cupones.module';
import { TransacionesModule } from './transaciones/transaciones.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    CategoriasModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfig,
      inject: [ConfigService],
    }),
    CuponesModule,
    TransacionesModule,
    ProductosModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
