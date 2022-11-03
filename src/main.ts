import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configurationService = app.get(ConfigService);
  await app.listen(configurationService.get('port'));
}
bootstrap().then(() => console.log('inicializou'));
