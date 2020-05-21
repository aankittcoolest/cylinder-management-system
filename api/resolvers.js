const db = require("./db");

const Query = {
  users: () => {
    let users = db.user.list();
    console.log(users);
    return users;
  },
};

module.exports = { Query };
