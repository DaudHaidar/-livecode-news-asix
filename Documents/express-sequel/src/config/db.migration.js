const Customer = require('../model/customer')

const DbMigration = async ()=>{
    await Customer().sync({alter:true})
}
module.exports = DbMigration