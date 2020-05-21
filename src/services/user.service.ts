
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user';
import { TokenGenerator } from './token-generator.service';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private tokenGenerator: TokenGenerator
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async create(body: CreateUserDto) {
    let user = new User();
    user.alias = body.alias;
    user.isActive = true;
    user = await this.userRepository.save(user);

    const token = await this.tokenGenerator.generateUserToken(user);
    return { token };
  }
}