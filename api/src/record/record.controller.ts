import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RecordService } from './record.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @ApiBody({
    type: CreateRecordDto,
    description: '車体情報のjsonデータ',
  })
  @Post()
  create(@Body() createRecordDto: CreateRecordDto) {
    return this.recordService.create(createRecordDto);
  }

  @Get()
  findAll() {
    return this.recordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordService.findOne(+id);
  }
}
