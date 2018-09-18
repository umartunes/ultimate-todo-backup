"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const expressSession = require("express-session");
const connectMonogo = require("connect-mongo");
const passport = require("passport");
//Import Routes
const routes_auth_1 = require("./routes/routes-auth");
const routes_todos_1 = require("./routes/routes-todos");
//Importing MiddleWares
const response_template_1 = require("./middlewares/response-template");
const server = express();
const PORT = process.env.PORT || 5000;
//DB Connection
require('./config/db-config');
// Cors for local development
var corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
server.use(cors(corsOptions));
//Body Parser
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
//Session and Passport management
const MongoStore = connectMonogo(expressSession);
server.use(expressSession({
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: 'hashingString',
    saveUninitialized: false,
    resave: false
}));
require('./config/passport-config'); // All strategies of passport are available here, put this file before passport initialization
server.use(passport.initialize());
server.use(passport.session());
//Sending static files for root
server.use(express.static('./build'));
server.use('/uploads', express.static('./uploads'));
//Use Custom Middleware to get response template in all api routes
server.use(response_template_1.default);
//Setting Routes
server.use('/api/auth', routes_auth_1.default);
server.use('/api/todos', routes_todos_1.default);
//Catch all other routes and show react app
// Reference: https://jsmegatools.com/2018/02/24/setting-up-modular-express-routing-react-router-and-basic-components/
// Reference: https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
// server.get('*', function (req, res) {
//     res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
// });
//Error Control
server.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send('Something broke!');
});
exports.default = server;
//# sourceMappingURL=app.js.map