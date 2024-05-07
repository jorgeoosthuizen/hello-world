module.exports = (sequelize,type) => {
    return sequelize.define('book', {
        book_id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull: false
        },
        title:{
            type: type.STRING,
            allowNull: false
        },
        author_name:{
            type: type.STRING,
            allowNull: false
        },
        publication_date:{
            type: type.DATEONLY,
            allowNull:false
        },
        genre:{
            type: type.STRING,
            allowNull:false
        },
        available_copies:{
            type: type.INTEGER,
            allowNull:false
        }
    });
};