import { Body, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() body: object ,@Param() params: object): string {

    return this.appService.getHello();
  }
}
