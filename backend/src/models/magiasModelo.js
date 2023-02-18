const connection = require("./connection");
const getAll = async () => {
  const magias = await connection.execute("SELECT * FROM magias");
  return magias;

};

module.exports = {
  getAll
};