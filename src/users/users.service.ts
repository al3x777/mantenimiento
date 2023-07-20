import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly usersModel: Model<User>
  ) {


  }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.usersModel.create(createUserDto);
    return newUser;
  }

  async findAll() {
    return await this.usersModel.find()
  }

  async findOne(id: string) {
    return await this.usersModel.findById(id);
  }

  async findAlex(id: string, nombre: string) {
    return await this.usersModel.findOne({
      
        _id: new ObjectId(id), nombre: nombre

      

    })
  }



  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
