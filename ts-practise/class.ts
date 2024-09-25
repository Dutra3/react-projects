class User {
    private id: number;
    private name: string;
    private email: string;
    private password?: string;
    private active: boolean;

    constructor( id: number, name: string, email: string, password: string = '', active: boolean) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.active = active;
    }
}


export {}