const Books = require('../sequelize').Book;

exports.getAllBooks = async (request, response, next) => {
    try {
        const books = await Books.findAll();
        response.send(books)
    } catch (error) {
        response.status(500).json(error);
    };
};