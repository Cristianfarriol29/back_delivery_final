const User = require('../api/users/users.model');
const JwtUtils = require('../utils/jwt/jwt');
const { setError } = require('../utils/error/error');

const isBasic = async (req, res, next) => {
    try {
       
        const token = req.headers.authorization;
        if (!token) {
        
            return next(setError(400, 'This token doesnt exist'));
        }
        const parsedToken = token.replace('Bearer ', '');
        const validToken = JwtUtils.verifyToken(parsedToken, process.env.JWT_SECRET);
        const userLogued = await User.findById(validToken.id);
        req.user = userLogued;
        next();
        
    } catch (error) {
        return next(setError(400, 'Cannot authenticate'))
    }
}

const isAdmin = async (req, res, next) => {
    try {
       
        const token = req.headers.authorization;
        if (!token) {
        
            return next(setError(400, 'This token doesnt exist'));
        }
        const parsedToken = token.replace('Bearer ', '');
        const validToken = JwtUtils.verifyToken(parsedToken, process.env.JWT_SECRET);
        const userLogued = await User.findById(validToken.id);
        req.user = userLogued;
        if (userLogued.role === 'admin') {
            next();
        }
        else {
            return next(setError(404, 'You are not authenticated for this action.'))
        }
    } catch (error) {
        return next(setError(400, 'Cannot authenticate'))
    }
}

const isStore = async (req, res, next) => {
    try {
       
        const token = req.headers.authorization;
        if (!token) {
        
            return next(setError(400, 'This token doesnt exist'));
        }
        const parsedToken = token.replace('Bearer ', '');
        const validToken = JwtUtils.verifyToken(parsedToken, process.env.JWT_SECRET);
        const userLogued = await User.findById(validToken.id);
        req.user = userLogued;
        if (userLogued.role === 'store'|| userLogued.role === 'admin') {
            next();
        }
        /* else if (userLogued.role === 'admin') {
            next();
        } */
        else {
            return next(setError(404, 'You are not authenticated for this action.'))
        }
    } catch (error) {
        return next(setError(400, 'Cannot authenticate'))
    }
}

module.exports = { isBasic, isAdmin, isStore }