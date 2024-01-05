const { v4: uuidv4 } = require("uuid");

function newID() {
  return uuidv4();
}

module.exports = { newID };