
import { IsNotEmpty, IsAlphanumeric } from 'class-validator';

export class TokenPayload {

  @IsNotEmpty()
  idUser: number;

  @IsNotEmpty()
  idRoom: number;

  rol: string
}