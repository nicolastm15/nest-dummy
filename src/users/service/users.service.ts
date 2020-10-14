import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../model/entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepo:Repository<User>
    ){}
    
    create (user: User){
        this.userRepo.save(user)
    }

    findAll(): Promise<User[]>{
        return this.userRepo.find();
    }

    findOne(id:string): Promise<User>{
        return this.userRepo.findOne(id);
    }

    async delete (id:string): Promise<void>{
        await this.userRepo.delete(id);
    }
}
