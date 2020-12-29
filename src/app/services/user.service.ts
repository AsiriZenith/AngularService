import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()

export class UserService {

    constructor(private logservice: LogService) { }

    users = [
        { name: 'Asiri', status: 'Active' },
        { name: 'Senith', status: 'Active' },
        { name: 'Manjitha', status: 'Active' }
    ];

    addUser(name: string, status: string) {
        this.users.push({ name, status });
        this.logservice.logStatus(status);
    }

    updateStatus(id: number, status: string) {
        this.users[id].status = status;
        this.logservice.logStatus(status);
    }
}