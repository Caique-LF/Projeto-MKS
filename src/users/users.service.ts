import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users : User[] = [];
  private id = 1;

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id : this.id,
      name : createUserDto.name,
      email : createUserDto.email,
      password : createUserDto.password
    }
    this.id = this.id + 1;

    this.users.push(newUser);

    const{password, ...usercreated} = newUser

    return usercreated;
  }

  findAll() {

    let userArray = [];

    for (let index = 0; index < this.users.length; index++) {
      let {password, ...user}= this.users[index]
      
      userArray.push(user)
    }
    return userArray;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
