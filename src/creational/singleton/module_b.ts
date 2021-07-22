import { MyDatabaseFunction } from "./db/my-database-function";
import { myDatabaseClassic as myDatabaseClassicFromModule } from "./module_a";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "Roberto", age: 20 });
myDatabaseClassic.add({ name: "Sergio", age: 30 });
myDatabaseClassic.add({ name: "Elton", age: 50 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModule);
