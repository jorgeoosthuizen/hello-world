module.exports = (sequelize,type) => {
    return sequelize.define('user', {
        user_id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull: false
        },
        first_name:{
            type: type.STRING,
            allowNull: false
        },
        last_name:{
            type: type.STRING,
            allowNull: false
        },
        email:{
            type: type.STRING,
            allowNull: false
        },
        address:{
            type: type.STRING,
            allowNull:false
        },
        phone_number:{
            type: type.INTEGER,
            allowNull:false
        }
    });
};