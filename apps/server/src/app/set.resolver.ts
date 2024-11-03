import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';

@Resolver('data')
export class SetResolver {
    constructor(private readonly prismaService: PrismaService){}


  @Query('datas')
  async datas() {
    return await this.prismaService.data.findMany();
  }

  @Query('data')
  async data(@Args('name') name: string){
    return await this.prismaService.data.findFirst({ where: {name} })
  }

  @Mutation('createData')
  async createData(
    @Args('data') data: {name: string, age: number},
  ) {   

    return await this.prismaService.data.create({ data })
   
  }
}