import express, { Express } from "express";
import cookieParser from "cookie-parser";
import authorizeToken from "./middleware/authorizeToken";

const app: Express = express();
app.use(cookieParser());
const port: number = Number(process.env.PORT) || 3001;

app.get("/api/resources", authorizeToken(), (req, res) => {
  const identity = req.identity;
  res.json({
    message: "If you're seeing this, your call was successfully authorized! You are " + identity.user_id,
    identity,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
