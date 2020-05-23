import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database';
import appConfig from './config/app';
import jwtConfig from './config/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [databaseConfig, appConfig, jwtConfig]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => (configService.get('database')),
    }),
    UsersModule,
  ],
})
export class AppModule {}
