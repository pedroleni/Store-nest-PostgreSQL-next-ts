import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, DataSource } from 'typeorm';

import { categories } from './data/categories';
import { products } from './data/products';
import { Producto } from 'src/productos/entities/producto.entity';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoryRepository: Repository<Categoria>,
    @InjectRepository(Producto)
    private readonly productRepository: Repository<Producto>,
    private dataSource: DataSource,
  ) {}

  async onModuleInit() {
    const connection = this.dataSource;
    await connection.dropDatabase();
    await connection.synchronize();
  }

  async seed() {
    await this.categoryRepository.save(categories);
    for await (const seedProduct of products) {
      const category = await this.categoryRepository.findOneBy({
        id: seedProduct.categoryId,
      });
      const product = new Producto();
      product.name = seedProduct.name;
      product.image = seedProduct.image;
      product.price = seedProduct.price;
      product.inventory = seedProduct.inventory;
      product.category = category!;
      await this.productRepository.save(product);
    }
  }
}
