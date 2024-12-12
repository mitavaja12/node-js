const { Router } = require("express");
const { getAllBooks, getBookById, addBook, updateBookById, deleteBookById, filterBooks } = require('../controller/bookController');
const bookRouter = Router();


// Middleware for Validating Book Data
const validateBookData = (req, res, next) => {
    const { title, author, category, publicationYear, price, quantity, description, imageUrl } = req.body;
    if (!title || !author || !category || !publicationYear || !price || !quantity || !description || !imageUrl) {
        return res.status(400).send({ message: 'All fields are required' });
    }
    next();
};

// Routes
bookRouter.get('/', getAllBooks);
bookRouter.get('/book/:id', getBookById);
bookRouter.post('/addbooks', validateBookData,addBook);
bookRouter.patch('/update/:id', updateBookById);
bookRouter.delete('/delete/:id', deleteBookById);
bookRouter.get('/filter', filterBooks);

module.exports = bookRouter;
