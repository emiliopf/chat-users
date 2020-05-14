
import { IsNotEmpty, IsAlphanumeric } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsAlphanumeric()
  alias: string;
}