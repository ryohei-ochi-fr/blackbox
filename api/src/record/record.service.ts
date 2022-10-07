import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecordService {
  constructor(private prisma: PrismaService) {}
  create(createRecordDto: CreateRecordDto) {
    return this.prisma.record.create({ data: createRecordDto });
  }

  findAll() {
    return this.prisma.record.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} record`;
  }
}
