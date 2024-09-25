interface User {
    id: number | string;
    myName: string;
    email: string;
    password?: string | null;
    active: boolean; 
}

let user: User = {
    id: 5,
    myName: 'Gabriel',
    email: 'email@email.com.br',
    active: true,
};

let userTwo: User = {
    id: 5,
    myName: 'Gabriel',
    email: 'email@email.com.br',
    password: null,
    active: true,
};

let userThree: User = {
    id: 5,
    myName: 'Gabriel',
    email: 'email@email.com.br',
    password: "dbqwydqwyudq",
    active: true,
};

let userFour: Partial<User> = {
    id: 6,
    email: 'email@email.com.br',
};

interface Animal {
    name: string;
    type: 'earth' | 'water';
    isFromhere: boolean;
}

interface Pet extends Animal {
    owner: string;
}

let dog: Pet = {
    name: 'Belinha',
    type: 'earth',
    isFromhere: true,
    owner: 'Gabriel'
};