const fs = require("fs");
const path = require("path");
const filePathName = path.join("db/contacts.json")
const contactsPath = `${path.dirname(filePathName) + "/" + path.basename(filePathName)}`;
const admins = ['sdsdds', 'dsdssdds']
console.log(contactsPath)



module.exports = admins;