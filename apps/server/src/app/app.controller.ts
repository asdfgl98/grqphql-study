import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  add(){
    return this.appService.add()
  }

  @Get('name')
  async getName(){
    return await this.appService.getName()
  }
}