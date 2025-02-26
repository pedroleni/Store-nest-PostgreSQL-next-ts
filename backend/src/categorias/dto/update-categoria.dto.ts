import { PartialType } from '@nestjs/mapped-types';

import { IsNotEmpty } from 'class-validator';
import { CreateCategoriaDto } from './create-categoria.dto';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
  @IsNotEmpty({ message: 'El Nombre de la Categoría no puede ir vacio' })
  name: string;
}
