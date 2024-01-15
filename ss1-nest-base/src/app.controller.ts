import { Body, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const checkService = this.appService.getHello();
    console.log(checkService, 'checkService');

    return checkService;
  }

  @Get('/product')
  getProduct(@Body() body: any, @Param('id') id: string): string {
    console.log(id, 'id');

    const checkService = this.appService.getProduct();
    console.log(checkService, 'checkService');

    return checkService;
  }
}
