import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/')
  getAll() {
    const data = this.userService.getAll();
    console.log(data);
    return data;
  }

  @Post('/')
  create(@Body() body: CreateUserDto) {
    // console.log(body);
    
    const data = this.userService.create(body);
    return data;
  }
}
