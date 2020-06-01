import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { TokenPayload } from '../dtos/token-payload';


@Injectable()
export class TokenGenerator {

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
    ) {}

  async generateUserToken(payload: TokenPayload) {
    const signOptions = {
      algorithm: this.configService.get('jwt.algorithm'),
      expiresIn: this.configService.get('jwt.expiresIn')
    }

    const token = await this.jwtService.signAsync(payload, signOptions);
    return  { token };
  }
}