import  express from "express";
import cors from "cors";
import 'dotenv/config';
import  cokkieParser from "cookie-parser";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentilas:true}))

app.listen(port, ()=>console.log(`Server started on PORT:`))
