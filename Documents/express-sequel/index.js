
const Customer = require('./src/model/customer')
const DbMigration = require('./src/config/db.migration')

const run = async () =>{
    await DbMigration ()
//     const addCustomerBulk = await Customer().bulkCreate([
//     {
//         name: 'Joko Anwar',
//         address: 'Jakarta',
//         phone: '881727',
//         email: 'Joko@gmail.com',
//         balance: 30,
//     },{
//         name: 'Clement ',
//         address: 'Lyon',
//         phone: '881727',
//         email: 'Clement@gmail.com',
//         balance: 30,
//     },{
//         name: 'Sanders ',
//         address: 'Lima',
//         phone: '881727',
//         email: 'Sanders@gmail.com',
//         balance: 30,
//     },{
//         name: 'Salazar',
//         address: 'Jakarta',
//         phone: '881727',
//         email: 'Salazar@gmail.com',
//         balance: 30,
//     }
// ]);
    // console.log('addcustomer',addCustomerBulk);

    const customers = await Customer().findAll()
    console.log(JSON.stringify(customers,null,2));
}
run()