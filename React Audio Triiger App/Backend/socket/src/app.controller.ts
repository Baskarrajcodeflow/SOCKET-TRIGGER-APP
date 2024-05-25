import { Body, Controller, Get,Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from '@nestjs/common';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private logger = new Logger('AppController');
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('log')
  logMessage(@Body() body: { message: string }) {
    this.logger.log(`Received message from client: ${body.message}`);
  }
}
