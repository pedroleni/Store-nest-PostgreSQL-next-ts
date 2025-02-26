import { Module } from '@nestjs/common';
import { TransacionesService } from './transaciones.service';
import { TransacionesController } from './transaciones.controller';

@Module({
  controllers: [TransacionesController],
  providers: [TransacionesService],
})
export class TransacionesModule {}
