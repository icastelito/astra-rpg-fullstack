const getAll = (req, res) => {

  return res.status(200).json({message: "Todas as magias"});
};

module.exports = {
  getAll
};