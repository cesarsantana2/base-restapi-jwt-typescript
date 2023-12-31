"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const MONGO_KEY = MONGO_PASSWORD;
const MONGO_ADDRESS = process.env.MONGO_URL || "backup";
mongoose_1.default.connect(MONGO_ADDRESS, {
    writeConcern: {
        w: 'majority'
    }
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
//# sourceMappingURL=database.js.map