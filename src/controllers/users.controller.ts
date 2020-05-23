import { Controller, Get, Delete, Param, Post, Body, UseGuards } from '@nestjs/common';
import { Users } from '../entities/users.entity';
import { CreateUserDto } from '../dtos/create-user';
import { UserService } from '../services/user.service';
import { IsUserGuard } from '../guards/users.guard';


@Controller('users')
export class UsersController {
  
  constructor(private readonly userService: UserService) {}

  @Get()
  test(): string {
    return 'Test users controllersdsd';
  }

  @Get('/all')
  @UseGuards(IsUserGuard)
  findAll(): Promise<Users[]> {
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
