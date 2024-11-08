import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);
  onModuleInit() {
    try {
      this.$connect();

      this.logger.log(`Prisma client connected: ${process.env.DATABASE_URL}`);
    } catch (error) {
      this.logger.error(`Prisma client error: ${error.message}`);
    }
  }
}
