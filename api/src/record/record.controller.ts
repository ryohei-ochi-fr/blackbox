import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RecordService } from './record.service';
import { CreateRecordDto } from './dto/create-record.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @ApiBody({
    type: CreateRecordDto,
    description: '車体情報のjsonデータ',
  })

  // [Documenting NestJS APIs With Swagger](https://www.makeuseof.com/nestjs-apis-swagger-documentation/)
  @Post()
  @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  create(@Body() createRecordDto: CreateRecordDto) {
    return this.recordService.create(createRecordDto);
    // try {
    //   this.recordService.create(createRecordDto);
    // } catch (e) {
    //   return 422;
    // }
    // return 201;
  }

  @Get()
  @ApiOkResponse({ description: 'The resources were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  findAll() {
    return this.recordService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  findOne(@Param('id') id: string) {
    return this.recordService.findOne(+id);
  }
}
