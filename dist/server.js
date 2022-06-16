"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1["default"])();
var address = "0.0.0.0:5432";
//DO I NEED CORS? NOT CURRENTLY WORKING. I DID DO YARN ADD CORS.
/*const corsOptions = {
    origin: "",
    optionsSuccessStatus: 200
}*/
//app.use(cors(corsOptions))
app.use(body_parser_1["default"].json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});