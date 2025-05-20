import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LogEntryService } from './log-entry.service';

@Controller('log-entries')
export class LogEntryController {
  constructor(private readonly service: LogEntryService) {}

  @Post()
  create(@Body() body: { title: string; content: string }) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }
}
