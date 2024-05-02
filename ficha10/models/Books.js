module.exports = (sequelize,type) => {
    return sequelize.define('Books', {
        book_id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        title:{
            type: type.STRING,
            allowNull: false
        },
        author_name:{
            type: type.TEXT,
            allowNull: false
        },
        publication_date:{
            type: type.DATE,
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