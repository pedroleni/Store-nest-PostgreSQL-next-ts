import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /// nos permite que en los dto tengan validaciones
  // instalar npm i class-validator class-transfomer
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

/// npm i @nestjs/typeorm  typeorm pg - para instalar typeorm y postgres
