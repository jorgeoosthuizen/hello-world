module.exports = (sequelize,type) => {
    return sequelize.define('loan', {
        loan_id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull: false
        },
        loan_date:{
            type: type.DATEONLY,
            allowNull:false
        },
        return_date:{
            type: type.DATEONLY,
            allowNull:false
        }
    });
};