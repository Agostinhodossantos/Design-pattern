import { MyDatabaseClassic } from "./db/my-database-classic";
import './module_a';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: "Roberto", age: 20 });
myDatabaseClassic.add({ name: "Sergio", age: 30 });
myDatabaseClassic.add({ name: "Elton", age: 50 });
myDatabaseClassic.show();
