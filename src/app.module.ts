import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database';
import appConfig from './config/app';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      load: [databaseConfig, appConfig]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => (configService.get('database')),
    }),
    UserModule,
  ],
})
export class AppModule {}
