const personPrototype = {
  firstName: "Luiz",
  lastName: "Miranda",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);

console.log(anotherPerson.fullName());
