import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private readonly appService: HomeService) {}

  @Get('home')
  getHello(): string {
    return this.appService.getHello();
  }
}
