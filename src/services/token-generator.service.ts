import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from '../entities/user.entity';
import { ConfigService } from "@nestjs/config";


@Injectable()
export class TokenGenerator {

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
    ) {}


  async generateUserToken(user: User) {
    const payload = {
      userId: user.id
    }
    const signOptions = {
      algorithm: this.configService.get('jwt.algorithm'),
      expiresIn: this.configService.get('jwt.expiresIn')
    }

    return await this.jwtService.signAsync(payload, signOptions);
  }
}