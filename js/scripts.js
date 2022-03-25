/** Lista de contactos - 1
Crea una lista de contactos con datos predefinidos, cada contacto debe contener
el nombre y apellido como una sola cadena de caracteres
Crea una función para añadir un nuevo contacto a una lista
Crea una función para borrar un contacto existente de la lista
Crea una función para imprimir en consola los contactos presentes en la lista
Publica tu código en Github, en tu repositorio contact-list crea un branch llamado
project-1 y compártelo con nosotros. 👍🏼⬇️ */

//* Definición de la función para crear objetos Contact
class Contact {
    constructor(name, cell) {
        // Atributos
        this.name = name;
        this.cell = cell;
    }
}

//* Lista con algunos contactos predefinidos
const contactList = [
    new Contact("Anastasia", 3500000000),
    new Contact("Petronio", 3100000000),
    new Contact("Jacinta", 3120000000),
    new Contact("Rupertino", 3200000000)
];
// FUNCIONES
//* Añadir contacto - Recibe dos argumentos, nombre y celular del nuevo contacto
const addContact = function(name, cell) {
    contactList.push(new Contact(name, cell));
}

//* Borrar contacto - Recibe como argumento el nombre del contacto a eliminar
const delContact = function(name) {
    for (let i = 0; i < contactList.length; i++) {
        if (contactList[i].name == name) {
            let confirmation = prompt(`Eliminar contacto:
                                        \nNombre: ${contactList[i].name}
                                        \ncelular: ${contactList[i].cell}
                                        \n¿Está seguro? ('S' para confirmar, 'N' para abortar)`);
            confirmation = confirmation.toUpperCase();
            if (confirmation == "S") {
                contactList.splice(i, 1)
                console.log(`Contacto eliminado exitosamente.`);
            } else if (confirmation == "N")
                console.log("Se abortó la operación");
            else
                console.log("Opción inválida");
        }
    }
}
