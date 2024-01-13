const { usersMock } = require("../mocks/Users");

const getUsers = async (req, res) => {
  const users = await usersMock;

  try {
    res.send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getUsers,
};
