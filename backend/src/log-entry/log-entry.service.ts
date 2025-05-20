import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class LogEntryService {
  constructor(private prisma: PrismaService) {}

  create(data: { title: string; content: string }) {
    return this.prisma.logEntry.create({ data });
  }

  findAll() {
    return this.prisma.logEntry.findMany({ orderBy: { createdAt: 'asc' } });
  }

  findOne(id: number) {
    return this.prisma.logEntry.findUnique({ where: { id } });
  }
}
