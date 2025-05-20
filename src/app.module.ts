import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma/prisma.service';
import { PrismaModule } from './prisma/prisma/prisma.module';
import { LogEntryModule } from './log-entry/log-entry.module';

@Module({
  imports: [PrismaModule, LogEntryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
