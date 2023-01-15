import express from "express";
import routes from "./routes/product-routes";
import { connect } from "./database/database";

const app = express();
app.use(express.json());

connect();

app.use("/products", routes);

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
