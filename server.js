"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.use(express_1.default.json());
if (process.env.NODE_ENV === 'production') {
    var root_1 = path_1.default.resolve(__dirname, 'client', 'build');
    app.use(express_1.default.static(root_1));
    app.get('*', function (request, response) {
        response.sendFile('index.html', { root: root_1 });
    });
}
var PORT = process.env.PORT || 5002;
app.listen(PORT, function () { return console.log("Server started at port " + PORT); });
