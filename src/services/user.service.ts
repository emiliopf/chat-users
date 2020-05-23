
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/users.entity';
import { CreateUserDto } from '../dtos/create-user';
import { TokenGenerator } from './token-generator.service';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private tokenGenerator: TokenGenerator
  ) {}

  findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<Users> {
    return this.userRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async create(body: CreateUserDto) {
    let user = new Users();
    user.alias = body.alias;
    user = await this.userRepository.save(user);

    const token = await this.tokenGenerator.generateUserToken(user);
    return { token };
  }
}