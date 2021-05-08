const fs = require("fs");

//user default si no paso argumentos
const defaultUser = {
  user: "nuevo user",
  category: 3,
  address: "Encalada 12",
};

//extraigo el 3er argumento, destructurando, y paso un valor default para que no tire error
const stringUser = JSON.stringify(defaultUser);
const [, , arg = `${stringUser}`] = process.argv;
const [, newUserToAdd = `${stringUser}`] = arg.split("=");
console.log(newUserToAdd);

//leer
const readFile = () => {
  fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      try {
        const parsedData = JSON.parse(data);
        console.log(parsedData);
      } catch (error) {
        console.log(error);
      }
    }
  });
};

//agregar un user:
const appendUser = () => {
  fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const user = JSON.parse(data);
      user.clientes.push(JSON.parse(newUserToAdd));
      fs.writeFile(
        "./clients/clients.json",
        JSON.stringify(user, null, 2),
        (err, success) => {
          if (err) {
            console.log(err);
          } else {
            console.log(success, "agregado user!!");
          }
        }
      );
    }
  });
};

const removeLast = () => {
  fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const user = JSON.parse(data);
      user.clientes.pop();
      fs.writeFile(
        "./clients/clients.json",
        JSON.stringify(user, null, 2),
        (err, success) => {
          if (err) {
            console.log(err);
          } else {
            console.log(success, "removí último!!");
          }
        }
      );
    }
  });
};

const removeCustom = () => {
  fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const user = JSON.parse(data);
      user.clientes.splice(0, 1);
      fs.writeFile(
        "./clients/clients.json",
        JSON.stringify(user, null, 2),
        (err, success) => {
          if (err) {
            console.log(err);
          } else {
            console.log(success, "remover custom!!");
          }
        }
      );
    }
  });
};

const modifyUser = () => {
  fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const user = JSON.parse(data);
      user.clientes.splice(0, 1, newUserToAdd);
      fs.writeFile(
        "./clients/clients.json",
        JSON.stringify(user, null, 2),
        (err, success) => {
          if (err) {
            console.log(err);
          } else {
            console.log(success, "remover custom!!");
          }
        }
      );
    }
  });
};

module.exports = { readFile, appendUser, removeLast, removeCustom, modifyUser };
