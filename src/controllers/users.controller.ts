import { Controller, Get, Delete, Param, Post, Body, UseGuards } from '@nestjs/common';
import { Users } from '../entities/users.entity';
import { CreateUserDto } from '../dtos/create-user';
import { UserService } from '../services/user.service';
import { IsUserGuard } from '../guards/users.guard';
import { TokenGenerator } from '../services/token-generator.service';
import { TokenPayload } from '../dtos/token-payload';


@Controller('users')
export class UsersController {
  
  constructor(
    private readonly userService: UserService,
    private tokenGenerator: TokenGenerator,
  ) {}

  @Get()
  test(): string {
    return 'Test users controllers 2';
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.userService.findOne(id); 
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
    console.log('users/create s');
    return this.userService.create(body);
  }

  @Post('/token')
  token(@Body() body: TokenPayload) {
    return this.tokenGenerator.generateUserToken(body);
  }
}
