import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/main/app.module';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(3000);
}
bootstrap();
