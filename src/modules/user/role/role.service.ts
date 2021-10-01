import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class RoleService {
    constructor() {}
    
    async getRole() : Promise<any> {
        return 'Hello';
    }
}