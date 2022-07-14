const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");
const contactsPath = path.join(__dirname, "/db/contacts.json");

const updateContactList = async(newList) => {
    await fs.writeFile(contactsPath, JSON.stringify(newList, null, 2))
    }

  const listContacts = async() => {
    const list = await fs.readFile(contactsPath);
    const parsedList = JSON.parse(list);
    return parsedList;
  }
  
  const getContactById = async(contactId) => {
    const contactList = await listContacts();
    const contact = contactList.find(contact => contact.id === contactId);
    if(!contact){
        return null;
    }
    return contact;
  }
  
  const removeContact = async(contactId) => {
    const contactList = await listContacts();
    const idx = contactList.findIndex(item => item.id === contactId)
  if(idx === -1){
    return null
  }
  const [removeContact] = contactList.splice(idx, 1);
  updateContactList(contactList);
  return removeContact;
}
  
  const addContact = async(name, email, phone) => {
    const contactList = await listContacts();
    const newContact = {
        id: nanoid(),
        name, 
        email,
        phone
    }
    contactList.push(newContact);
    updateContactList(contactList);
    return newContact;
  }

module.exports = {
    listContacts, 
    getContactById, 
    removeContact,
    addContact
};