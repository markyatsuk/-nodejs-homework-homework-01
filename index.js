const users = require("./contacts");
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();


const  invokeAction = async({ action, id, name, email, phone }) =>{
  switch (action) {
    case 'list':
      const allList = await users.listContacts();
      console.table(allList);
      break;

    case 'get':
     const contactById = await users.getContactById(id);
     console.log(contactById)
      break;

    case 'add':
      const newContact = await users.addContact(name, email, phone);
      console.log(newContact);
      break;

    case 'remove':
      const removeContact = await users.removeContact(id);
      console.log(removeContact)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
