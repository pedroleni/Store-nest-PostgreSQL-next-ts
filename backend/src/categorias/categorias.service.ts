import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';

import { Categoria } from './entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  // inyectamos en el contructor el repositorio de la entidad Categoria
  constructor(
    @InjectRepository(Categoria)
    private readonly categoryRepository: Repository<Categoria>,
  ) {}

  create(createCategoryDto: CreateCategoriaDto) {
    // se  podria hacer un new Categoria() y asignarle los valores pero esta es la version corta
    return this.categoryRepository.save(createCategoryDto);
  }

  findAll() {
    // el find() sin parametros trae todos los registros de la tabla
    // si le incluimos parametros podemos hacer busquedas mas especificas como por ejemplo
    // this.categoryRepository.find({where: {name: 'categoria1'}})
    return this.categoryRepository.find();
  }

  async findOne(id: number, products?: string) {
    // vamos a busar un elementos por id y si no lo encuentra lanzamos una excepcion
    /// para poder generar las opciones nos traemos el generico FindManyOptions y asi consegir el autocompletado
    const options: FindManyOptions<Categoria> = {
      where: {
        id,
      },
    };

    if (products === 'true') {
      (options.relations = {
        products: true,
      }),
        (options.order = {
          products: {
            id: 'DESC',
          },
        });
    }

    const category = await this.categoryRepository.findOne(options);
    if (!category) {
      throw new NotFoundException('La Categoría no existe');
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoriaDto) {
    /**
     * Primero buscamos la categoria por id
     * luego actualizamos el nombre de la categoria
     * y guardamos los cambios
     */
    const category = await this.findOne(id);
    category.name = updateCategoryDto.name;
    return await this.categoryRepository.save(category);
  }

  async remove(id: number) {
    const category = await this.findOne(id);
    await this.categoryRepository.remove(category);
    return 'Categoría Eliminada';
  }
}
