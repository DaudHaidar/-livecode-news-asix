const { Sequelize } = require('sequelize')
// ujungnya -> server
const infraManager = (config) =>{
    const initDb = () => {
    const {dbHost, dbPort, dbUser, dbPassword, dbName, dbDriver } = config();
    const dsn = `${dbDriver}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`
    return new Sequelize (dsn)
}
return {initDb}
}

module.exports = infraManager