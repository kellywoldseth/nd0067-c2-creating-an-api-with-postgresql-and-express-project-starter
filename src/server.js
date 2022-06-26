"use strict";
//This file contains starter code that was provided to us by the Udacity staff.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_1 = __importDefault(require("./handlers/products"));
//import userRoutes from './handlers/users'
const orders_1 = __importDefault(require("./handlers/orders"));
const app = (0, express_1.default)();
const address = "0.0.0.0.3000";
//DO I NEED CORS? NOT CURRENTLY WORKING. I DID DO YARN ADD CORS.
/*const corsOptions = {
    origin: "",
    optionsSuccessStatus: 200
}*/
//app.use(cors(corsOptions))
app.use(body_parser_1.default.json());
(0, products_1.default)(app);
//userRoutes(app)
(0, orders_1.default)(app);
app.get('/', function (req, res) {
    res.send('Hello World!!');
});
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
exports.default = app;
