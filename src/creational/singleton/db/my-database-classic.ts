interface User {
  name: string;
  age: number;
}

export class MyDatabaseClassic {
  private static instace: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static getInstance(): MyDatabaseClassic {
    if (MyDatabaseClassic.instace === null) {
      MyDatabaseClassic.instace = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.instace;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
