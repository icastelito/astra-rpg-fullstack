const connection = require("./connection");
const getAll = () => {
  const magias = connection.execute();

};

module.exports = {
  getAll
};