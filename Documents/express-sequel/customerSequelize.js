const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345678@localhost:5432/db_enigmamart')

// const conn = async () =>{
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error.message);
//       }
// }

// conn()


// define model
const migration = async () =>{ const Customer = sequelize.define('mst_customer',{

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

    await Customer.sync({alter:true})

    // CRUD BASIC
    const Customer01 = await Customer.create({
        name:'Arilson',
        address: 'Rio de Janeiro',
        phone: '09808871',
        email:`${this.name}${this.address}@gmail.com`,
        balance:30
    })
    // console.log(Customer01);
    
    // // SELCT * FROM 
    // const Customer01 = await Customer.findAll()
    // console.log(JSON.stringify(Customer01, null, 2));

    // //SELECT WHERE
    // const Customer02 = await Customer.findAll({ where : {name : 'Warrowski'},})
    // console.log(JSON.stringify(Customer02, null, 2));

    // //SELECT ORDER BY
    // const Customer03 = await Customer.findAll({ order : [['createdAt','desc']]})
    // console.log(JSON.stringify(Customer03, null, 2));

    // //find one 
    // const customer04 = await Customer.findOne({where :{name : 'Warrowski'}})
    // console.log(JSON.stringify(customer04, null, 2));

    // //|| findByPk
    // const customer05 = await Customer.findByPk('854d8ccf-5bb3-44c8-a4dd-7c9645d23539')
    // console.log(JSON.stringify(customer05, null, 2));

    //DELETE
    // const delCustomer01 = await Customer.destroy({
    //     where : { id : 'af7b0d9b-fcf7-44d0-b601-5410b554645f'}
    // })

    //paranoid : mengupdated waktu di kolom deletedAt, pakai syntax destroy dulu kalau mau nyoba
    // const delCustomer01 = await Customer.destroy({
    //     where : { id : '854d8ccf-5bb3-44c8-a4dd-7c9645d23539'}
    // }) 
    // const Customer06 = await Customer.findAll({
    //     paranoid:false}
    // )
    // console.log(JSON.stringify(Customer06, null, 2));

    //update
    // const updtCustomer01 = await Customer.update({
    //     balance : 5000
    // }, {where :{id:'ac21fb7a-9ece-404a-bf21-caae192bf286'}})


}


migration()