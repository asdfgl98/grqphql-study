import { Module } from '@nestjs/common';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import {GraphQLModule} from '@nestjs/graphql'
import { SetResolver } from './set.resolver';

@Module({
  imports: [PrismaModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    typePaths: ['./**/*.graphql'],
    driver: ApolloDriver,
    playground: true,
    path: '/graphql'
  })],
  controllers: [AppController],
  providers: [AppService, SetResolver],
})
export class AppModule {}
