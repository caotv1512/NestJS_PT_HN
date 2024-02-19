import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUser() {
    const users = await this.userService.findAll();
    return users;
  }

  @Post()
  async createUser(@Body() data: any) {
    console.log(data, 'data');
    
   const result = await this.userService.create(data);
    return {
      success: true,
      message: 'User created successfully',
      data: result,
    }
  }
}
