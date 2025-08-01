import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
import { CreateUserDto } from 'src/dto/users/create-user.dto';
import { UpdateUserDto } from 'src/dto/users/update-user.dto';
import { ValidationPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    @Get()
    findAll(@Query('role') role?: 'admin' | 'intern' | 'engineer'){
        return this.userService.findAll(role)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.userService.findOne(id)
    }

    @Post()
    create(@Body(ValidationPipe) user: CreateUserDto){
        return this.userService.create(user)
    }

    @Patch(':id')
    update(@Param('id',ParseIntPipe) id: number, @Body(ValidationPipe) updated_user: UpdateUserDto){
        return this.userService.update(id, updated_user)
    }

    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id: number){
        return this.userService.delete(id)
    }
}
