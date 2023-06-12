const createZombies = `
  create table if not exists zombies(
	id integer primary key autoincrement,
  weapon text not null,
  armor text not null
);
`
module.exports = createZombies