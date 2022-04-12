/* En tu repositorio de GitHub contact-list, crea un branch llamado review-1
Completa tu producto de lista de contactos para una revisión en vivo al grupo
Bonus: Añade una función que permita actualizar un contacto */

// FUNCIONES
//* Añadir contacto - Pide los datos al usuario mediante un prompt
const addContact = function () {
  alert("Ingresar nuevo contacto");
  const contact = {
    id: contactsCounter++,
    name: prompt("Nombre: "),
    lastName: prompt("Apellido: "),
    cell: prompt("Celular: "),
    locations: [prompt("Dirección: "), prompt("Ciudad: ")],
  };
  contactList.push(contact);
  console.log("Contacto añadido exitosamente.");
};

//* Actualizar contacto
const updateContact = function () {
  const contactId = parseInt(
    prompt("Ingresa el id del contacto a modificar: ")
  );
  const contact = contactList.find((contact) => contact.id == contactId);
  if (contact != undefined) {
    alert("ACTUALIZAR CONTACTO");
    contact.name = prompt("Nombre: ", contact.name);
    contact.lastName = prompt("Apellido: ", contact.lastName);
    contact.cell = prompt("Celular: ", contact.cell);
    contact.locations = [
      prompt("Dirección: ", contact.locations[0]),
      prompt("Ciudad: ", contact.locations[1]),
    ];
  } else console.log("Id no encontrado.");
};

//* Borrar contacto
const delContact = function () {
  const contactId = parseInt(prompt("Ingrese el Id del contacto a eliminar: "));
  const contact = contactList.find((contact) => contact.id == contactId);
  if (contact != undefined) {
    let confirmation = prompt(`Eliminar contacto Id ${contact.id}:
                                    \nNombre: ${contact.name} ${contact.lastName}
                                    \ncelular: ${contact.cell}
                                    \nDirección: ${contact.locations[0]}, ${contact.locations[1]}
                                    \n¿Está seguro? (Si/No)`);
    confirmation = confirmation.toUpperCase();
    if (confirmation == "SI") {
      contactList = contactList.filter((contact) => contact.id != contactId);
      console.log(`Contacto eliminado exitosamente.`);
    } else if (confirmation == "NO") console.log("Se abortó la operación");
    else console.log("Opción inválida");
  } else console.log("No existe ningún contacto con el Id especificado");
};

//* Métodos de ordenamiento
// Por nombre
const orderByName = function() {
  for (let i = 0; i < contactList.length - 1; i ++) {
    for (let j = 0; j < contactList.length - 1 - i; j++) {
      if (contactList[i].name > contactList[i + 1].name) {
        [contactList[i], contactList[i + 1]] = [contactList[i + 1], contactList[i]];
      }
    }
  }
};

// * Imprimir los contactos en consola por medio de un for
const printContacts = function () {
  console.log("");
  console.log("**************************");
  console.log("*** LISTA DE CONTACTOS ***");
  console.log("**************************");
  contactList.forEach((contact) => {
    console.log("**************************");
    console.log(`ID Contacto: ${contact.id}`);
    console.log(`Nombre: ${contact.name} ${contact.lastName}`);
    console.log(`Celular: ${contact.cell}`);
    console.log(`Dirección: ${contact.locations[0]}, ${contact.locations[1]}`);
    console.log("**************************");
  });
};
//* Ejecución
// Variables
let contactsCounter = 1;

//* Lista con algunos contactos predefinidos
let contactList = [
  {
    id: contactsCounter++,
    name: "Anastasia",
    lastName: "del Socorro",
    cell: "3500000000",
    locations: ["Calle 5 # 8 - 25", "Tangamandapio"],
  },
  {
    id: contactsCounter++,
    name: "Petronio",
    lastName: "Euclides",
    cell: "3100000000",
    locations: ["Cra 15 # 24 - 14", "Somondoco"],
  },
  {
    id: contactsCounter++,
    name: "Jacinta",
    lastName: "Trinidad Díaz",
    cell: "3120000000",
    locations: ["Calle 8 # 8 - 8", "Cucaita"],
  },
  {
    id: contactsCounter++,
    name: "Rupertino",
    lastName: "Feo",
    cell: "3200000000",
    locations: ["Calle 13 # 23 - 12", "Sutamarchan"],
  },
];

//* Imprimir la lista de contactos mediante el console.table
console.log("LISTA DE CONTACTOS");
console.table(contactList);

// Llamado de las funciones
printContacts();
orderByName();
printContacts();
addContact();
addContact();
orderByName();
printContacts();

