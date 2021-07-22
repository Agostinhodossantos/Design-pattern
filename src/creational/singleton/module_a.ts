import { MyDatabaseClassic } from "./db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: "Agostinho", age: 20 });
myDatabaseClassic.add({ name: "Ana", age: 30 });
myDatabaseClassic.add({ name: "Santos", age: 50 });
myDatabaseClassic.show();
