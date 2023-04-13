import bcrypt from 'bcrypt'
import { regGmail, regPassword } from '../constants/regex';

import User from '../models/User';

import { config } from 'dotenv';
config();

export const signin = async (req : any, res : any) => {
    const { email, password } = req.body;
    
    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) {
            return res.status(404).json({ message: `Пользователя не существует` });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) {
            return res.status(400).json({ message: 'Пароль неверный' });
        }

        res.status(200).json({ result: existingUser })
    } catch(error) {
        res.status(500).json({ message: 'Что то пошло не так' });
    }
}

export const signup = async (req : any, res : any) => {
    const { email, password, confirmPassword, firstName, lastName} = req.body;

    try {
        const existingUser = await User.findOne({ email });
        
        if(existingUser) {
            return res.status(400).json({ message: `Пользователь уже существует` });
        }
        
        if(!regGmail.test(email)) {
            return res.status(400).json({ message: 'Неверная почта' })
        }

        if(!regPassword.test(password)) {
            return res.status(400).json({ message: 'Неверный пароль' })
        }

        if(password !== confirmPassword) {
            return res.status(400).json({ message: `Пароли не совпадают` });
        }


        const hashPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashPassword, name: `${firstName} ${lastName}`, verified: false});
        
        res.status(200).json({ result });
    } catch(error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
};