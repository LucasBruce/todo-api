import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';
import { AppService } from './app.service';
import { TodoModule } from './module/todo/todo.module';
import { DatabaseConfig } from './util/database-config';

@Module({
    imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        load: [configuration],
      }),
      TypeOrmModule.forRootAsync({
        useClass: DatabaseConfig,
        imports: [ConfigModule],
      }),
      TodoModule,
    ],
    controllers: [AppController],
    providers: [
        AppService
    ],
  })
  export class AppModule {}
