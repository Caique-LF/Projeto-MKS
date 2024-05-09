import { Injectable, NotFoundException } from '@nestjs/common';
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
     const userId = this.users.find(user => user.id === id);
     
      if (!userId) {
        throw new NotFoundException('Usuário não encontrado');
      };
      
      return userId
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);

    user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    
    return
    
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
