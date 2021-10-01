import { Controller, Post, Body, Inject } from '@nestjs/common';

@Controller('role')
export class RoleController {
    constructor() { }

    @Post()
    public async createUser() : Promise<any> {
        return 'Hello';
    }
}