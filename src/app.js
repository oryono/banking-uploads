import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'

import uploadsRouter from "./uploads/router.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json())
app.use("/uploads", uploadsRouter);


app.listen(port, () => console.log(`App listening at http://localhost:${port}`));