import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt'
import { Users } from './entities/users.entity';
import { UserService } from './services/user.service';
import { UsersController } from './controllers/users.controller';
import { TokenGenerator } from './services/token-generator.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        privateKey: configService.get('jwt.privateKey'),
        publicKey: configService.get('jwt.publicKey')
      })
    })
  ],
  providers: [
    TokenGenerator,
    UserService,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
