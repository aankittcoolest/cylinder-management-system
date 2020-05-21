const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const express = require("express");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const db = require("./db");

const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server-express");

const port = process.env.PORT || 9000;
const jwtSecret = Buffer.from("helloWorldFromAnkit", "base64");

const app = express();
app.use(
  cors(),
  bodyParser.json(),
  expressJwt({
    secret: jwtSecret,
    credentialsRequired: false,
  })
);

const typeDefs = gql(fs.readFileSync("./schema.graphql", { encoding: "utf8" }));
const resolvers = require("./resolvers");

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: "/graphql" });

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = db.user.list().find((user) => user.username === username);
  if (!(user && user.password === password)) {
    res.sendStatus(401);
    return;
  }
  const token = jwt.sign({ sub: user.id }, jwtSecret);
  res.send({ token });
});

const httpServer = http.createServer(app);
httpServer.listen(port, () =>
  console.info(`Server listening on port: ${port}`)
);
