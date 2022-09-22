import express, { json } from "express";

const app = express();
app.use(json());

app.get("/", (req, res) => {
  const { name } = req.body;

  res.send(name);
});

app.listen(3333);
