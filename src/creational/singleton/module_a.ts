import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: "Agostinho", age: 20 });
myDatabaseClassic.add({ name: "Ana", age: 30 });
myDatabaseClassic.add({ name: "Santos", age: 50 });
myDatabaseClassic.show();

export { myDatabaseClassic };
