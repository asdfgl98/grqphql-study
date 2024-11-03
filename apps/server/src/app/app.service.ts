import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService){}

  async getData() {
    return await this.prismaService.data.findMany()
    
  }

  async add(){
    const result = await this.prismaService.data.create({
      data : {
        name: '바보',
        age: 27
      }
    })

    return result
  }

  async getName(){
    return await this.prismaService.data.findMany({
      select: {
        name: true
      }
    })
  }
}
