// Basic TypeScript Types
// let myString: string = "Hello, TypeScript!";
// let myNumber: number = 42;
// let myBoolean: boolean = true;
// let mySymbol: symbol = Symbol("mySymbol");
// let myBigInt: bigint = 9007199254740991n;

// Type safe function
const addTwo = (a: number, b: number): number => {
    return a + b;
};

console.log(addTwo(50, 42));

// Array, Tuple and readonly modifier

// Array
// const arr: Array<string> = ["Programming", "JavaScript", "TypeScript"];
const arr: string[] = ["Programming", "JavaScript", "TypeScript"];

// Tuple
const dahkaLatLng: readonly [number, number] = [23.8103, 90.4125];

// Optional, Default and rest Parameters (...args) in function
const concatName = (firstName: string, lastName?: string) => {
    if (!lastName) {
        return firstName;
    }

    return firstName + " " + lastName;
};
console.log(concatName("John"));

const greeting = (greeting: string, fullName: string) => {
    console.log(greeting + " " + fullName);
};

// Rest Parameters (...args) in Function
const sum = (...numbers: number[]) => {
    return numbers.reduce((total, sum) => total + sum, 0);
};

const logUserAction = (
    ...args: [name: string, age: number, isActive: boolean]
) => {
    const [name, age, isActive] = args;
    console.log(name + "is" + age);
};

logUserAction("Rakeeb", 26, true);

// Object type, Type Alias and Interface
type TUser = {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
};

interface IUser {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
}

const user: IUser = {
    name: "Rakeeb",
    age: 26,
    isActive: true,
    action: () => console.log("Hasan"),
    badges: ["Not a student", "Progmmer"],
};
