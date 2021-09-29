

const printName = (name) => "Hi " + name;
console.log(printName("Pranav"))




const printBill = (name, bill) => {

    return `Hi  ${name}  please pay:  ${bill}`;
}
console.log(printBill("Pranav", 1))





const person = {
    name: "Nam Chomsky",
    age: 92
}
let { name, age } = person;
console.log('Name:' + name + ' Age:' + age)