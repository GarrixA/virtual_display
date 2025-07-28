import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(@Query('role') role?: 'admin' | 'intern' | 'engineer'){
        return []
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return {id}
    }

    @Post()
    create(@Body() user: {}){
        return user
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updated_user: {}){
        return { id, ...updated_user}
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return {id}
    }
}
