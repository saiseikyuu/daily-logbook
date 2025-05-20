import { Module } from '@nestjs/common';
import { LogEntryService } from './log-entry.service';
import { LogEntryController } from './log-entry.controller';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Module({
  providers: [LogEntryService, PrismaService],
  controllers: [LogEntryController],
})
export class LogEntryModule {}
