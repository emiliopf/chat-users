
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    console.log('findALL')
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  create(body: CreateUserDto) {
    const user = new User();
    user.alias = body.alias;
    user.isActive = true;
    return this.userRepository.save(user);
  }
}