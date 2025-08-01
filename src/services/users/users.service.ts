import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/users/create-user.dto';
import { UpdateUserDto } from 'src/dto/users/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            role: 'admin',
        },
        {
            id: 2,
            name: 'Bob Smith',
            email: 'bob.smith@example.com',
            role: 'engineer',
        },
        {
            id: 3,
            name: 'Clara Lee',
            email: 'clara.lee@example.com',
            role: 'intern',
        },
        {
            id: 4,
            name: 'David Kim',
            email: 'david.kim@example.com',
            role: 'engineer',
        },
        {
            id: 5,
            name: 'Eva Martinez',
            email: 'eva.martinez@example.com',
            role: 'admin',
        },
        {
            id: 6,
            name: 'Frank Zhang',
            email: 'frank.zhang@example.com',
            role: 'intern',
        },
];

findAll(role?: 'admin' | 'intern' | 'engineer'){
    if(role){
        const rolesArray = this.users.filter(user => user.role === role)

        if(rolesArray.length === 0) throw new NotFoundException("Role not found")

        return rolesArray
    }

    return this.users
}

findOne(id: number){
    const user = this.users.find(user => user.id === id)

    if(!user) throw new NotFoundException("User not found")

    return user
}

create(user: CreateUserDto){ 
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id)
    const newUser = {
        id: userByHighestId[0].id + 1, ...user
    }
    this.users.push(newUser)
    return newUser
}

update(id: number, updated_user: UpdateUserDto){
    this.users = this.users.map(user => {
        if(user.id === id){
            return {...user, ...updated_user}
        }
        return user
    })
    return this.findOne(id)
}
delete(id: number){
    const removed_user = this.findOne(id)

    this.users = this.users.filter(user => user.id !== id)

    return removed_user
}
}
