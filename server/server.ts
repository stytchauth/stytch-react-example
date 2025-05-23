import express, { RequestHandler, Express } from "express";
import authorizeToken from "./middleware/authorizeToken";

const app: Express = express();
const port: number = Number(process.env.PORT) || 3001;

app.get("/api/resources", authorizeToken(), (req, res) => {
  res.send("If you're seeing this, your call was successfully authorized!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
