
export class UserService {

    users = [
        { name: 'Asiri', status: 'Active' },
        { name: 'Senith', status: 'Active' },
        { name: 'Manjitha', status: 'Active' }
    ];

    addUser(name: string, status: string) {
        this.users.push({ name, status });
    }

    updateStatus(id: number, status: string) {
        this.users[id].status = status;
    }
}