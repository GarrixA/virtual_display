import { Injectable } from '@nestjs/common';

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
        return this.users.filter(user => user.role === role)
    }

    return this.users
}

findOne(id: number){
    const user = this.users.find(user => user.id === id)

    return user
}

create(user: {name: string, email: string, role: 'admin' | 'intern' | 'engineer'}){ 
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id)
    const newUser = {
        id: userByHighestId[0].id +1, ...user
    }
    this.users.push(newUser)
    return newUser
}

}
