let myName: string = 'Gabriel';
let numbers: number[] = [1, 2, 3, 4, 5];

console.log(myName);
console.log(numbers);

function goodMorning(): void {
    console.log('Good Morning')
}

function sum(a: number, b: number): number {
    return a + b;
}

const result = sum(3, 6);
console.log(result);

const person: {myName: string, age: number} = {
    myName: 'Gabriel',
    age: 30
};

let id: string | number;
id = 5;
id = 'weqweq1-13143';