//* Definición de la función para crear objetos Contact
class Contact {
  constructor(name, lastName, cell, locations) {
    // Atributos
    this.id = contactsCounter++;
    this.name = name;
    this.lastName = lastName;
    this.cell = cell;
    this.locations = locations;
  }
}

// FUNCIONES
//* Añadir contacto - Pide los datos al usuario mediante un prompt
const addContact = function () {
    alert("Ingresar nuevo contacto");
    const name = prompt("Nombre: ");
    const lastName = prompt("Apellido: ");
    const cell = prompt("Celular: ");
    const locations = [prompt("Dirección: "), prompt("Ciudad: ")];
    contactList.push(new Contact(name, lastName, cell, locations));
    console.log("Contacto añadido exitosamente.");
};

//* Actualizar contacto
const updateContact = function () {
    const contactId = parseInt(prompt("Ingresa el id del contacto a modificar: "));
    const contact = contactList.find(contact => contact.id == contactId);
    if (contact != undefined) {
        alert("ACTUALIZAR CONTACTO");
        contact.name = prompt("Nombre: ", contact.name);
        contact.lastName = prompt("Apellido: ", contact.lastName);
        contact.cell = prompt("Celular: ", contact.cell);
        contact.locations = [prompt("Dirección: ", contact.locations[0]), prompt("Ciudad: ", contact.locations[1])];
    } else console.log("No existe ningún contacto con el Id especificado.");
}

//* Borrar contacto
const delContact = function () {
    const contactId = parseInt(prompt("Ingrese el Id del contacto a eliminar: "));
    const contact = contactList.find(contact => contact.id == contactId);
    if (contact != undefined) {
        let confirmation = prompt(`Eliminar contacto Id ${contact.id}:
                                    \nNombre: ${contact.name} ${contact.lastName}
                                    \ncelular: ${contact.cell}
                                    \nDirección: ${contact.locations[0]}, ${contact.locations[1]}
                                    \n¿Está seguro? ('S' para confirmar, 'N' para abortar)`);
        confirmation = confirmation.toUpperCase();
        if (confirmation == "S") {
            contactList.splice(contactList.indexOf(contact), 1);
            console.log(`Contacto eliminado exitosamente.`);
        } else if (confirmation == "N") console.log("Se abortó la operación");
        else console.log("Opción inválida");
    } else
    console.log("No existe ningún contacto con el Id especificado");
};

// * Imprimir los contactos en consola por medio de un for
const printContacts = function () {
  console.log("**************************");
  console.log("*** LISTA DE CONTACTOS ***");
  console.log("**************************");
  contactList.forEach(contact => {
    console.log("**************************");
    console.log(`ID Contacto: ${contact.id}`);
    console.log(`Nombre: ${contact.name} ${contact.lastName}`);
    console.log(`Celular: ${contact.cell}`);
    console.log(
      `Dirección: ${contact.locations[0]}, ${contact.locations[1]}`
    );
    console.log("**************************");
  });
};
//* Ejecución
// Variables
let contactsCounter = 1;

//* Lista con algunos contactos predefinidos
const contactList = [
  new Contact("Anastasia", "del Socorro", "3500000000", [
    "Calle 5 # 8 - 25",
    "Tangamandapio",
  ]),
  new Contact("Petronio", "Euclides", "3100000000", [
    "Cra 15 # 24 - 14",
    "Somondoco",
  ]),
  new Contact("Jacinta", "Trinidad Díaz", "3120000000", [
    "Calle 8 # 8 - 8",
    "Cucaita",
  ]),
  new Contact("Rupertino", "Feo", "3200000000", [
    "Calle 13 # 23 - 12",
    "Sutamarchan",
  ]),
];

//* Imprimir la lista de contactos mediante el console.table
console.log("LISTA DE CONTACTOS");
console.table(contactList);

// Llamado de las funciones
printContacts();
