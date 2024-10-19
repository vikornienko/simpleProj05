import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const app: Express = express();
const port = process.env.PORT || 4005;
let runningMessage: string = "Server is up and running on port " + port + " and typescript change visible.";

app.get("/", (req: Request, res: Response) => {
  console.log("API was successfully requested.");
  res.send(runningMessage);
});

const server = app.listen(port, () => {
  console.log(runningMessage);
});

module.exports = server;
