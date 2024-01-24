import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './database/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(data): Promise<User> {
    const user = {
      id: data.id,
      username: data.username,
      age: data.age,
    };
    await this.userRepository.save(user)
    return user;
  }
}
