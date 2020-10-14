import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { User } from '../model/entities/user.entity';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){};

    @Post()
    create(@Body() user:User ){
        this.userService.create(user)
    }

    @Get()
    findAll(@Query() query){
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.userService.findOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        this.userService.delete(id);
    }
}
