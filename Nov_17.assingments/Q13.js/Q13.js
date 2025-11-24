
const people = [
    { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } },
    { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } }
];
function extractpersoninfo(people) {
    return people.map(person => {
        const { name, address: { city, street: { name: streetname } } } = person;
        return `${name} lives in ${city} on ${streetname}`;
    });
}



extractpersoninfo(people)