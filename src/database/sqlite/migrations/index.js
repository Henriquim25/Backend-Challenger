const sqliteConnection = require('../../sqlite')
const createZombies = require('./createZombies')

async function migrationsRun(){
  const schemas = [
    createZombies
  ].join('')

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error =>console.error(error))
}

module.exports = migrationsRun