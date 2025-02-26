import { IsNotEmpty } from 'class-validator';

export class CreateCategoriaDto {
  @IsNotEmpty({ message: 'El Nombre de la Categoría no puede ir vacio' })
  name: string;
}
