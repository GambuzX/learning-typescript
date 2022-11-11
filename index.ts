function greet(person: string , date: Date) {
    console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan", new Date());

let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;