import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';


export const signup = async (req: Request, res: Response) => {
    //Saving user
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    user.password = await user.encryptPassword(user.password);

    const savedUser = await user.save();
    //token
    const token: string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || 'default');
    res.header('auth-token', token).json(savedUser);
    
};
 
export const signin = async (req: Request, res: Response) => {
    console.log(req.body);

    const user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).json("Email or password is wrong");
    }

    const correctPassword: boolean = await user.validatePassword(req.body.password);
    if(!correctPassword) return res.status(400).json("Invalid Password");

    const token: string = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET || 'tokentest', {
        expiresIn: 60 * 60 * 12,
    });

    res.header('auth-token', token).json({"id": user.id, 
                                          "name": user.username, 
                                          "email": user.email, 
                                          "token": token});
};

export const profile = async (req: Request, res: Response) => {
    const user = await User.findById(req.userId, { password: 0});
    if(!user) return res.status(404).json("No User Found");
    //re-estrutura que dados devem ser enviados de acordo com a página de profile
    res.send(user);
};
