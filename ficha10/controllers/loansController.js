const Loans = require('../sequelize').Loan;

exports.getAllLoans = async (request, response, next) => {
    try {
        const loans = await Loans.findAll();
        response.send(loans)
    } catch (error) {
        response.status(500).json(error);
    };
};