const {DataTypes} = require('sequelize');
const config = require('../config/config')
const {initDb} = require('../manager/infra.manager')(config)

// define model
const Customer = () =>{ 
    console.log()
    return initDb().define('mst_customer',{
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            name:{
                type: DataTypes.STRING(100),
                allowNull: false
            },
            address: DataTypes.STRING(),
            phone: DataTypes.STRING,
            email:{
                type : DataTypes.STRING,
                unique: true
            },
            balance: DataTypes.INTEGER,
            isStatus:{
                type:DataTypes.BOOLEAN,
                defaultValue:true
            }
            
            },{freezeTableName: true, underscored: true, paranoid :true});      
    }



module.exports = Customer;