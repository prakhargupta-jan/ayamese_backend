import 'dotenv/config.js'
import dbInstance from "./db.js";
import app from "./server.js";

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port:${process.env.PORT}`)
);