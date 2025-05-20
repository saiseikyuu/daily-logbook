// src/prisma/prisma.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient {
  private _logEntry: any;
  public get logEntry(): any {
    return this._logEntry;
  }
  public set logEntry(value: any) {
    this._logEntry = value;
  }
}
