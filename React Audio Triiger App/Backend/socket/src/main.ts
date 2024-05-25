import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  await app.listen(3002);
  const logger = new Logger();
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
