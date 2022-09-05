import dotenv from "dotenv";
dotenv.config();

// importing packages
import express from "express";
import mongoose from "mongoose";
import engine from "express-engine-jsx";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import compression from "compression";
//importing live reloading
import { createServer as createLiveReloadServer } from "livereload";
import connectLiveReload from "connect-livereload";

// importing auth
import { localStrategy } from "./auth/index.js";
// alternative for __dirname
import path from "path";
import * as url from "url";
// importing routes
import { authRouter, homeRouter } from "./routes/index.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

//create live relaod server
const liveReloadServer = createLiveReloadServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// creating the express application
const app = express();
app.use(compression());

if (process.env.ENV_MODE == "dev") {
  app.use(connectLiveReload());
}

//setup session management
app.use(
  session({
    store: MongoStore.create({
      dbName: "events-db",
      mongoUrl: process.env.DATABASE_URL,
    }),
    secret: process.env.SESSION_SECRET || "ohNoIforgotToAddASecret",
    saveUninitialized: true,
    cookie: {
      maxAge: Number(process.env.SESSION_EXPIRATION_TIME),
    },
    resave: true,
  })
);
//setup passport
passport.use(localStrategy);
passport.serializeUser((user, done) => {
  console.log(user);
  done(null, {
    ...user,
    password: undefined,
  });
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
app.use(passport.initialize());
app.use(passport.session());
// setup static file serving
app.use(express.static(path.join(__dirname, "../public")));
//setup parsing form data
app.use(express.urlencoded({ extended: true }));
// setup parsing cookies
app.use(cookieParser());
// setup render engine
app.set("views", path.resolve(__dirname, "views"));
app.engine("jsx", engine);
app.set("view engine", "jsx");

//setting up routes
app.use("/", homeRouter);
app.use("/auth", authRouter);

const PORT = Number(process.env.PORT);

mongoose.connect(process.env.DATABASE_URL, {}, () => {
  console.log(`Successfully connected to mongodb database.`);
  app.listen(PORT, () => {
    console.log(
      `Server started listening on port ${PORT}.\nVisit : http://localhost:${PORT}`
    );
  });
});
