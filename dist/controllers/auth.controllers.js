"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.profile = exports.signin = exports.signup = void 0;
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Saving user
    const user = new User_1.default({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    user.password = yield user.encryptPassword(user.password);
    const savedUser = yield user.save();
    //token
    const token = jsonwebtoken_1.default.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || 'default');
    res.header('auth-token', token).json(savedUser);
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const user = yield User_1.default.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json("Email or password is wrong");
    }
    const correctPassword = yield user.validatePassword(req.body.password);
    if (!correctPassword)
        return res.status(400).json("Invalid Password");
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'tokentest', {
        expiresIn: 60 * 60 * 12,
    });
    res.header('auth-token', token).json({ "id": user.id,
        "name": user.username,
        "email": user.email,
        "token": token });
});
exports.signin = signin;
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findById(req.userId, { password: 0 });
    if (!user)
        return res.status(404).json("No User Found");
    //re-estrutura que dados devem ser enviados de acordo com a página de profile
    res.send(user);
});
exports.profile = profile;
const validate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('auth-token');
    const token_secret = process.env.TOKEN_SECRET;
    const user_email = req.body.email;
    if (token == undefined) {
        return res.status(403).json("Invalid Token");
    }
    else if (token !== undefined && token_secret !== undefined) {
        const tokenValidate = jsonwebtoken_1.default.verify(token, token_secret);
        const userId = token.sub;
        const user = yield User_1.default.findOne({ email: user_email });
        if (!user) {
            return res.status(403).json("Invalid Token");
        }
        else {
            const newToken = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'tokentest', {
                expiresIn: 60 * 60 * 12,
            });
            res.header('auth-token', newToken).json({ "id": user.id,
                "name": user.username,
                "email": user.email,
                "token": newToken });
        }
    }
});
exports.validate = validate;
//# sourceMappingURL=auth.controllers.js.map