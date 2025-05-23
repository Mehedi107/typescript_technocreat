{
  // String
  const str: string = 'hello mehedi!';

  // Tuple
  const data: [string, number, boolean] = ['mehedi', 30, true];

  // Reference type --> object
  const data2: {
    company: 'Space X'; // literal type
    fName: string;
    lName?: string;
    age: number;
    isValid: boolean;
  } = {
    company: 'Space X',
    fName: 'Mehedi',
    lName: 'Hasan',
    age: 30,
    isValid: true,
  };

  // function
  function add(num1: number, num2: number) {
    return num1 + num2;
  }
  add(5, 6);

  const arrowFunc = (num1: number, num2: number): number => num1 + num2;

  // array
  const arr: number[] = [1, 3, 5, 6, 5];

  const newArr: number[] = arr.map((num: number): number => num * num);

  // spread and rest operator
  const obj1 = {
    name: 'mehedi',
    job: 'teacher',
    age: 20,
  };
  const obj2 = {
    fName: 'hasan',
    occupation: 'student',
  };

  const obj3 = {
    ...obj1,
    ...obj2,
  };

  const arr2: string[] = ['Akash', 'Bappy'];
  const arr3: string[] = [];
  arr3.push(...arr2);

  // rest operator
  const greeting = (...friends: string[]) => {
    friends.forEach(frnd => console.log(frnd));
  };
  greeting('mehedi', 'akash');

  // object destructing
  const person: {
    fName: string;
    age: number;
    occupation: string;
  } = {
    fName: 'Hasan',
    age: 50,
    occupation: 'Stock Holder',
  };

  const { age, occupation, fName } = person;

  // array destructuring
  const friends: string[] = [
    'Monica',
    'Rachel',
    'Phebe',
    'Ross',
    'Josh',
    'Tokyo',
  ];

  const [a, , bestFriend, ...rest] = friends;

  // Type alias
  type Student = {
    fName: string;
    age: number;
    class: number;
    roll: number;
  };

  const sutdent1: Student = {
    fName: 'Robin',
    age: 20,
    class: 12,
    roll: 254,
  };
  const sutdent2: Student = {
    fName: 'Jessi',
    age: 20,
    class: 12,
    roll: 254,
  };

  // union type
  type Frontend = 'React' | 'Angular';
  type Backend = 'Node' | 'Php';

  const developer: Frontend = 'React';

  // intersection type
  type FrontendDeveloper = {
    skill: string[];
    frontend: 'React' | 'Angular';
  };
  type BackendDeveloper = {
    skill: string[];
    backend: 'Node' | 'Php';
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skill: ['HTML', 'CSS', 'JS', 'Node', 'Express', 'Mongodb'],
    frontend: 'React',
    backend: 'Node',
  };

  // ternary operator
  const aggee: number = 19;

  const isAdult = aggee >= 18 ? 'adult' : 'not adult';
  console.log(isAdult);

  // nullish operator
  const user = undefined;

  console.log(user ?? 'Guest');

  // never type
  function throwNewError(value: string): never {
    throw new Error(value);
  }

  throwNewError('>>>>>This is an error<<<<<');
}
// tsnd --respawn src/index.ts
