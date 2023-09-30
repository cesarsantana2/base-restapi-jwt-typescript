"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// settings
app.set('port', 4000);
// middlewares
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204, // Retornar status 204 para preflight
};
app.use((0, cors_1.default)(corsOptions));
// routes
app.use('/api/auth/', auth_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map