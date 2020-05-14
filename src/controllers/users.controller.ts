import { Controller, Get, Delete, Param, Post, Body } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user';
import { UserService } from '../services/user.service';

@Controller('users')
export class UsersController {
  
  constructor(private readonly userService: UserService) {}

  @Get()
  test(): string {
    return 'Test users controllersdsd';
  }

  @Get('/all')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  };

  @Delete('/delete/:idUser')
  remove(@Param('idUser') idUser: string) {
    return this.userService.remove(idUser);
  }

  @Post('/create')
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }
}
