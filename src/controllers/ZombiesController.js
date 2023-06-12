const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite')

class ZombiesController {
  async create(request,response){
    const {weapon , armor} = request.body
    
    const database = await sqliteConnection()
    
  

  await database.run("INSERT INTO zombies(weapon , armor) VALUES(? , ?)",
    [weapon , armor]
  );

  return response.status(201).json()
  }

  async update(request,response){
    const {weapon , armor} = request.body
    const {id} = request.params

    const database = await sqliteConnection()
    const zombie = await database.get("SELECT * FROM zombies WHERE id = (?)",[id])

    if(!zombie){
      throw new AppError("Zombie not found")
    }

    zombie.weapon = weapon ?? zombie.weapon
    zombie.armor = armor ?? zombie.armor

    await database.run(`
    UPDATE zombies SET
    weapon = ?,
    armor = ?
    WHERE id = ?`,
    [zombie.weapon,zombie.armor,id]
    )

    return response.status(200).json
  }

  async show(request,response){
    const {id} = request.params
    const database = await sqliteConnection()

    const zombie = await database.get("SELECT * FROM zombies WHERE id = (?)",[id])

    if(!zombie){
      throw new AppError("Zombie not found")
    }

    response.status(200).json(zombie)
  }

  async delete(request,response){
    const {id} = request.params
    const database = await sqliteConnection()

    await database.run(`
      DELETE FROM zombies
      WHERE id =(?)
    `,[id])

    response.status(200).json()
  }
}

module.exports = ZombiesController