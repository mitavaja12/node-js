const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authentication token is required!' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        req.user = decoded; 
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token!' });
    }
};

const authorize = (roles = []) => (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'User not authenticated!' });
    }

    if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access forbidden: insufficient permissions!' });
    }

    next();
};

module.exports = { authenticate, authorize };
