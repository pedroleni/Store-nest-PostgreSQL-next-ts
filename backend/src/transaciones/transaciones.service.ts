import { Injectable } from '@nestjs/common';
import { CreateTransacioneDto } from './dto/create-transacione.dto';
import { UpdateTransacioneDto } from './dto/update-transacione.dto';

@Injectable()
export class TransacionesService {
  create(createTransacioneDto: CreateTransacioneDto) {
    return 'This action adds a new transacione';
  }

  findAll() {
    return `This action returns all transaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transacione`;
  }

  update(id: number, updateTransacioneDto: UpdateTransacioneDto) {
    return `This action updates a #${id} transacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} transacione`;
  }
}
